import React, { useRef, useEffect, useState } from "react";
export default function Timer() {
  const Ref = useRef(null);

  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 7200);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <>
      <h2 className="bg-gradient-success py-3 px-4 w-25 position-fixed rounded-pill text-center">{timer}</h2>

      <section>
      <div
            class="d-flex justify-content-center align-items-center mt-sm-5 my-1"
          >
            <div class="all card p-lg-2 w-75 shadow-5">
              <div class="question ml-sm-5 pl-sm-5 pt-2">
                <div class="py-2 h5">
                  <b>Q. which option best describes your job role?</b>
                </div>
                <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                  <label class="options"
                    >Small Business Owner or Employee
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="options"
                    >Nonprofit Owner or Employee
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="options"
                    >Journalist or Activist
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="options"
                    >Other
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="d-flex align-items- justify-content-around pt-3">
                <div id="prev">
                  <button class="btn btn-primary">Previous</button>
                </div>
                <div class="ml-auto mr-sm-5">
                  <button class="btn btn-primary">Next</button>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
