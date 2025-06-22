"use client";

import DashboardHeader from "@/app/components/dashboardHeader";
import DashboardSideBar from "@/app/components/dashboardSideBar";
import Image from "next/image";
import { useState } from "react";
// import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export default function Dashboard() {
  // const auth = useSelector((state) => state.auth);
  const [activeChat, setActiveChat] = useState(null);

  // const pathname = usePathname();


  // console.log('auth', auth);
  return (
    <div className="dashboard-home">
      <div className="dashboard-home__card1">
        <div className="dashboard-home__card1__title-group">
          <h2 className="dashboard-home__card1__title-group__title">
            Hi, Aisha
          </h2>

            <div  className="dashboard-home__card1__title-group__btn"
            onClick={() => window.location.href = "/justice/dashboard/suspect/no-match"}
          >
            Search and Link Suspect profile
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15 10.625H5C4.65833 10.625 4.375 10.3417 4.375 10C4.375 9.65833 4.65833 9.375 5 9.375H15C15.3417 9.375 15.625 9.65833 15.625 10C15.625 10.3417 15.3417 10.625 15 10.625Z"
                fill="white"
              />
              <path
                d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V5C9.375 4.65833 9.65833 4.375 10 4.375C10.3417 4.375 10.625 4.65833 10.625 5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <h2 className="dashboard-home__card1__sub-title">
          Welcome to Agency Portal
        </h2>

        <div className="dashboard-home__card1__btn">
          Zone 2: Lagos, Ogun
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="dashboard-home__card1__stats">
          <div className="dashboard-home__card1__stats__card">
            <h3 className="dashboard-home__card1__stats__card__title">
              Total Suspect in Custody
            </h3>

            <div className="dashboard-home__card1__stats__card__subtitle-group">
              <h4>2,439</h4>
              <h4>
                +10.38%
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.635 6.6967L17.1335 4.8125L15.5161 11.3825L13.4982 9.44539L10.2434 12.8359C10.1329 12.951 9.98024 13.016 9.82068 13.016C9.66112 13.016 9.50847 12.951 9.39797 12.8359L7.00804 10.3464L3.49305 14.0078C3.26893 14.2413 2.898 14.2488 2.66454 14.0247C2.43109 13.8006 2.42352 13.4297 2.64763 13.1962L6.58533 9.09443C6.69583 8.97933 6.84848 8.91427 7.00804 8.91427C7.1676 8.91427 7.32025 8.97933 7.43075 9.09443L9.82068 11.5839L12.6528 8.63379L10.635 6.6967Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </h4>
            </div>
          </div>
          <div className="dashboard-home__card1__stats__card">
            <h3 className="dashboard-home__card1__stats__card__title">
              Male Suspect
            </h3>

            <div className="dashboard-home__card1__stats__card__subtitle-group">
              <h4>1 620</h4>
              <h4>
                +9.73%%
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.635 6.6967L17.1335 4.8125L15.5161 11.3825L13.4982 9.44539L10.2434 12.8359C10.1329 12.951 9.98024 13.016 9.82068 13.016C9.66112 13.016 9.50847 12.951 9.39797 12.8359L7.00804 10.3464L3.49305 14.0078C3.26893 14.2413 2.898 14.2488 2.66454 14.0247C2.43109 13.8006 2.42352 13.4297 2.64763 13.1962L6.58533 9.09443C6.69583 8.97933 6.84848 8.91427 7.00804 8.91427C7.1676 8.91427 7.32025 8.97933 7.43075 9.09443L9.82068 11.5839L12.6528 8.63379L10.635 6.6967Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </h4>
            </div>
          </div>
          <div className="dashboard-home__card1__stats__card">
            <h3 className="dashboard-home__card1__stats__card__title">
              Female Suspect
            </h3>

            <div className="dashboard-home__card1__stats__card__subtitle-group">
              <h4>81 9</h4>
              <h4>
                +6.08%
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.635 6.6967L17.1335 4.8125L15.5161 11.3825L13.4982 9.44539L10.2434 12.8359C10.1329 12.951 9.98024 13.016 9.82068 13.016C9.66112 13.016 9.50847 12.951 9.39797 12.8359L7.00804 10.3464L3.49305 14.0078C3.26893 14.2413 2.898 14.2488 2.66454 14.0247C2.43109 13.8006 2.42352 13.4297 2.64763 13.1962L6.58533 9.09443C6.69583 8.97933 6.84848 8.91427 7.00804 8.91427C7.1676 8.91427 7.32025 8.97933 7.43075 9.09443L9.82068 11.5839L12.6528 8.63379L10.635 6.6967Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </h4>
            </div>
          </div>
          <div className="dashboard-home__card1__stats__card">
            <h3 className="dashboard-home__card1__stats__card__title">
              Suspect Bailed
            </h3>

            <div className="dashboard-home__card1__stats__card__subtitle-group">
              <h4>206</h4>
              <h4>
                +15.03%
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.635 6.6967L17.1335 4.8125L15.5161 11.3825L13.4982 9.44539L10.2434 12.8359C10.1329 12.951 9.98024 13.016 9.82068 13.016C9.66112 13.016 9.50847 12.951 9.39797 12.8359L7.00804 10.3464L3.49305 14.0078C3.26893 14.2413 2.898 14.2488 2.66454 14.0247C2.43109 13.8006 2.42352 13.4297 2.64763 13.1962L6.58533 9.09443C6.69583 8.97933 6.84848 8.91427 7.00804 8.91427C7.1676 8.91427 7.32025 8.97933 7.43075 9.09443L9.82068 11.5839L12.6528 8.63379L10.635 6.6967Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </h4>
            </div>
          </div>
          <div className="dashboard-home__card1__stats__card">
            <h3 className="dashboard-home__card1__stats__card__title">
              Filed in Court
            </h3>

            <div className="dashboard-home__card1__stats__card__subtitle-group">
              <h4>486</h4>
              <h4>
                +17.38%
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.635 6.6967L17.1335 4.8125L15.5161 11.3825L13.4982 9.44539L10.2434 12.8359C10.1329 12.951 9.98024 13.016 9.82068 13.016C9.66112 13.016 9.50847 12.951 9.39797 12.8359L7.00804 10.3464L3.49305 14.0078C3.26893 14.2413 2.898 14.2488 2.66454 14.0247C2.43109 13.8006 2.42352 13.4297 2.64763 13.1962L6.58533 9.09443C6.69583 8.97933 6.84848 8.91427 7.00804 8.91427C7.1676 8.91427 7.32025 8.97933 7.43075 9.09443L9.82068 11.5839L12.6528 8.63379L10.635 6.6967Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </h4>
            </div>
          </div>
          <div className="dashboard-home__card1__stats__card">
            <h3 className="dashboard-home__card1__stats__card__title">
              Released
            </h3>

            <div className="dashboard-home__card1__stats__card__subtitle-group">
              <h4>1 , 1 1 2</h4>
              <h4>
                +4.48%
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.635 6.6967L17.1335 4.8125L15.5161 11.3825L13.4982 9.44539L10.2434 12.8359C10.1329 12.951 9.98024 13.016 9.82068 13.016C9.66112 13.016 9.50847 12.951 9.39797 12.8359L7.00804 10.3464L3.49305 14.0078C3.26893 14.2413 2.898 14.2488 2.66454 14.0247C2.43109 13.8006 2.42352 13.4297 2.64763 13.1962L6.58533 9.09443C6.69583 8.97933 6.84848 8.91427 7.00804 8.91427C7.1676 8.91427 7.32025 8.97933 7.43075 9.09443L9.82068 11.5839L12.6528 8.63379L10.635 6.6967Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </h4>
            </div>
          </div>
          <div className="dashboard-home__card1__stats__card">
            <h3 className="dashboard-home__card1__stats__card__title">
              Missing
            </h3>

            <div className="dashboard-home__card1__stats__card__subtitle-group">
              <h4>1 7</h4>
              <h4>
                +15.11%
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.635 6.6967L17.1335 4.8125L15.5161 11.3825L13.4982 9.44539L10.2434 12.8359C10.1329 12.951 9.98024 13.016 9.82068 13.016C9.66112 13.016 9.50847 12.951 9.39797 12.8359L7.00804 10.3464L3.49305 14.0078C3.26893 14.2413 2.898 14.2488 2.66454 14.0247C2.43109 13.8006 2.42352 13.4297 2.64763 13.1962L6.58533 9.09443C6.69583 8.97933 6.84848 8.91427 7.00804 8.91427C7.1676 8.91427 7.32025 8.97933 7.43075 9.09443L9.82068 11.5839L12.6528 8.63379L10.635 6.6967Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </h4>
            </div>
          </div>
          <div className="dashboard-home__card1__stats__card dashboard-home__card1__stats__card-last">
            <h3 className="dashboard-home__card1__stats__card__title">
              High Priority Suspect
            </h3>

            <div className="dashboard-home__card1__stats__card__subtitle-group">
              <h4>101</h4>
              <h4></h4>
            </div>
          </div>
        </div>
        <h2 className="dashboard-home__card1__subtitle">Top Zone</h2>
        <div className="dashboard-home__card1__agency-stats">
          <div className="dashboard-home__card1__agency-stats__card">
            <div className="dashboard-home__card1__agency-stats__card__title-group">
              <h3>Lagos</h3>
            </div>
            <h4 className="dashboard-home__card1__agency-stats__card__subtitle">
              1 ,071
            </h4>
          </div>

          <div className="dashboard-home__card1__agency-stats__card">
            <div className="dashboard-home__card1__agency-stats__card__title-group">
              <h3>Abuja</h3>
            </div>
            <h4 className="dashboard-home__card1__agency-stats__card__subtitle">
              820
            </h4>
          </div>

          <div className="dashboard-home__card1__agency-stats__card">
            <div className="dashboard-home__card1__agency-stats__card__title-group">
              <h3>Kano</h3>
            </div>
            <h4 className="dashboard-home__card1__agency-stats__card__subtitle">
              57 3
            </h4>
          </div>

          <div className="dashboard-home__card1__agency-stats__card">
            <div className="dashboard-home__card1__agency-stats__card__title-group">
              <h3>Rivers</h3>
            </div>
            <h4 className="dashboard-home__card1__agency-stats__card__subtitle">
              220
            </h4>
          </div>

          <div className="dashboard-home__card1__agency-stats__card">
            <div className="dashboard-home__card1__agency-stats__card__title-group">
              <h3>Oyo</h3>
            </div>
            <h4 className="dashboard-home__card1__agency-stats__card__subtitle">
              662
            </h4>
          </div>

          <div className="dashboard-home__card1__agency-stats__card">
            <div className="dashboard-home__card1__agency-stats__card__title-group">
              <h3>Ondo</h3>
            </div>
            <h4 className="dashboard-home__card1__agency-stats__card__subtitle">
              541
            </h4>
          </div>

          <div className="dashboard-home__card1__agency-stats__card dashboard-home__card1__agency-stats__card-max">
            <div className="dashboard-home__card1__agency-stats__card__title-group">
              <h3>Anambra</h3>
            </div>
            <h4 className="dashboard-home__card1__agency-stats__card__subtitle">
              697
            </h4>
          </div>
        </div>
      </div>

      <div className="dashboard-home__card2">
        <div className="dashboard-home__card2__chat">
          <div className="dashboard-home__card2__chat__title-group">
            <h2>Secured Chat</h2>
            <h3
              className="pointer"
              onClick={() => (window.location.href = "/justice/dashboard/chat")}
            >
              View All
            </h3>
          </div>

          <div
            className={
              activeChat === 0
                ? "dashboard-home__card2__chat__user-card dashboard-home__card2__chat__user-card-active"
                : "dashboard-home__card2__chat__user-card"
            }
            onClick={() => setActiveChat(0)}
          >
            <div className="dashboard-home__card2__chat__user-card__inner">
              <Image
                className="dashboard-home__card2__chat__user-card__inner__img"
                alt=""
                src="/assets/Frame 10.png"
                width={48}
                height={48}
              />

              <svg
                width="14"
                height="14"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="active-svg"
              >
                <rect
                  x="1.25"
                  y="1.25"
                  width="15.5"
                  height="15.5"
                  rx="7.75"
                  fill="#12B76A"
                />
                <rect
                  x="1.25"
                  y="1.25"
                  width="15.5"
                  height="15.5"
                  rx="7.75"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>

              <div className="dashboard-home__card2__chat__user-card__inner__title-group">
                <h4>Naomi Adekunle</h4>
                <h4>Hey, I just finished the interview with the wit...</h4>
              </div>
              <div className="dashboard-home__card2__chat__user-card__inner__timestamp">
                1 min ago
              </div>
              {/* <span className="notifications">3</span> */}
            </div>
            <div className="dashboard-home__card2__chat__user-card__chats">
              <div className="dashboard-home__card2__chat__user-card__chats__sent">
                <div className="dashboard-home__card2__chat__user-card__chats__sent__inner">
                  No problem at all! <br />
                  I'll be there in about 15 minutes.
                </div>

                <div className="dashboard-home__card2__chat__user-card__chats__sent__timestamp">
                  10:11
                </div>
              </div>

              <div className="dashboard-home__card2__chat__user-card__chats__sent">
                <div className="dashboard-home__card2__chat__user-card__chats__sent__inner">
                  I'll text you when I arrive.
                </div>

                <div className="dashboard-home__card2__chat__user-card__chats__sent__timestamp">
                  10:11
                </div>
              </div>

              <div className="dashboard-home__card2__chat__user-card__chats__received">
                <div className="dashboard-home__card2__chat__user-card__chats__received__inner">
                  Great!😊
                </div>

                <div className="dashboard-home__card2__chat__user-card__chats__received__timestamp">
                  10:12
                </div>
              </div>
            </div>

            <div className="dashboard-home__card2__chat__user-card__form">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0769 2.08691C6.55691 2.08691 2.08691 6.56691 2.08691 12.0869C2.08691 17.6069 6.55691 22.0869 12.0769 22.0869C17.6069 22.0869 22.0869 17.6069 22.0869 12.0869C22.0869 6.56691 17.6069 2.08691 12.0769 2.08691ZM8.58691 8.08691C9.41691 8.08691 10.0869 8.75691 10.0869 9.58691C10.0869 10.4169 9.41691 11.0869 8.58691 11.0869C7.75691 11.0869 7.08691 10.4169 7.08691 9.58691C7.08691 8.75691 7.75691 8.08691 8.58691 8.08691ZM12.0869 18.0869C9.80691 18.0869 7.86691 16.4269 7.08691 14.0869H17.0869C16.3069 16.4269 14.3669 18.0869 12.0869 18.0869ZM15.5869 11.0869C14.7569 11.0869 14.0869 10.4169 14.0869 9.58691C14.0869 8.75691 14.7569 8.08691 15.5869 8.08691C16.4169 8.08691 17.0869 8.75691 17.0869 9.58691C17.0869 10.4169 16.4169 11.0869 15.5869 11.0869Z"
                  fill="#00B505"
                />
              </svg>

              <input type="text" placeholder="Type your message here ..." />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.1998 17.3799C11.4998 17.3799 10.7898 17.1099 10.2598 16.5799C9.73977 16.0599 9.44977 15.3699 9.44977 14.6399C9.44977 13.9099 9.73977 13.2099 10.2598 12.6999L11.6697 11.2899C11.9597 10.9999 12.4397 10.9999 12.7297 11.2899C13.0197 11.5799 13.0197 12.0599 12.7297 12.3499L11.3198 13.7599C11.0798 13.9999 10.9498 14.3099 10.9498 14.6399C10.9498 14.9699 11.0798 15.2899 11.3198 15.5199C11.8098 16.0099 12.5998 16.0099 13.0898 15.5199L15.3098 13.2999C16.5798 12.0299 16.5798 9.96994 15.3098 8.69994C14.0398 7.42994 11.9798 7.42994 10.7098 8.69994L8.28973 11.1199C7.77973 11.6299 7.49976 12.2999 7.49976 13.0099C7.49976 13.7199 7.77973 14.3999 8.28973 14.8999C8.57973 15.1899 8.57973 15.6699 8.28973 15.9599C7.99973 16.2499 7.51974 16.2499 7.22974 15.9599C6.43974 15.1699 6.00977 14.1199 6.00977 12.9999C6.00977 11.8799 6.43974 10.8299 7.22974 10.0399L9.64978 7.61992C11.4998 5.76992 14.5198 5.76992 16.3698 7.61992C18.2198 9.46992 18.2198 12.4899 16.3698 14.3399L14.1498 16.5599C13.6098 17.1099 12.9098 17.3799 12.1998 17.3799Z"
                  fill="#292D32"
                />
                <path
                  d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                  fill="#292D32"
                />
              </svg>

              <div className="dashboard-home__card2__chat__user-card__form__send">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 18L15.5 12L9.5 6"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div
            className={
              activeChat === 1
                ? "dashboard-home__card2__chat__user-card dashboard-home__card2__chat__user-card-active"
                : "dashboard-home__card2__chat__user-card"
            }
            onClick={() => setActiveChat(1)}
          >
            <div className="dashboard-home__card2__chat__user-card__inner">
              <Image
                className="dashboard-home__card2__chat__user-card__inner__img"
                alt=""
                src="/assets/Frame 10.png"
                width={48}
                height={48}
              />

              <svg
                width="14"
                height="14"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="active-svg"
              >
                <rect
                  x="1.25"
                  y="1.25"
                  width="15.5"
                  height="15.5"
                  rx="7.75"
                  fill="#12B76A"
                />
                <rect
                  x="1.25"
                  y="1.25"
                  width="15.5"
                  height="15.5"
                  rx="7.75"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>

              <div className="dashboard-home__card2__chat__user-card__inner__title-group">
                <h4>Imma Abubakar</h4>
                <h4>Hey, I just finished the interview with the wit...</h4>
              </div>
              <div className="dashboard-home__card2__chat__user-card__inner__timestamp">
                1 min ago
              </div>
            </div>
            <div className="dashboard-home__card2__chat__user-card__chats">
              <div className="dashboard-home__card2__chat__user-card__chats__sent">
                <div className="dashboard-home__card2__chat__user-card__chats__sent__inner">
                  No problem at all! <br />
                  I'll be there in about 15 minutes.
                </div>

                <div className="dashboard-home__card2__chat__user-card__chats__sent__timestamp">
                  10:11
                </div>
              </div>

              <div className="dashboard-home__card2__chat__user-card__chats__sent">
                <div className="dashboard-home__card2__chat__user-card__chats__sent__inner">
                  I'll text you when I arrive.
                </div>

                <div className="dashboard-home__card2__chat__user-card__chats__sent__timestamp">
                  10:11
                </div>
              </div>

              <div className="dashboard-home__card2__chat__user-card__chats__received">
                <div className="dashboard-home__card2__chat__user-card__chats__received__inner">
                  Great!😊
                </div>

                <div className="dashboard-home__card2__chat__user-card__chats__received__timestamp">
                  10:12
                </div>
              </div>
            </div>

            <div className="dashboard-home__card2__chat__user-card__form">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0769 2.08691C6.55691 2.08691 2.08691 6.56691 2.08691 12.0869C2.08691 17.6069 6.55691 22.0869 12.0769 22.0869C17.6069 22.0869 22.0869 17.6069 22.0869 12.0869C22.0869 6.56691 17.6069 2.08691 12.0769 2.08691ZM8.58691 8.08691C9.41691 8.08691 10.0869 8.75691 10.0869 9.58691C10.0869 10.4169 9.41691 11.0869 8.58691 11.0869C7.75691 11.0869 7.08691 10.4169 7.08691 9.58691C7.08691 8.75691 7.75691 8.08691 8.58691 8.08691ZM12.0869 18.0869C9.80691 18.0869 7.86691 16.4269 7.08691 14.0869H17.0869C16.3069 16.4269 14.3669 18.0869 12.0869 18.0869ZM15.5869 11.0869C14.7569 11.0869 14.0869 10.4169 14.0869 9.58691C14.0869 8.75691 14.7569 8.08691 15.5869 8.08691C16.4169 8.08691 17.0869 8.75691 17.0869 9.58691C17.0869 10.4169 16.4169 11.0869 15.5869 11.0869Z"
                  fill="#00B505"
                />
              </svg>

              <input type="text" placeholder="Type your message here ..." />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.1998 17.3799C11.4998 17.3799 10.7898 17.1099 10.2598 16.5799C9.73977 16.0599 9.44977 15.3699 9.44977 14.6399C9.44977 13.9099 9.73977 13.2099 10.2598 12.6999L11.6697 11.2899C11.9597 10.9999 12.4397 10.9999 12.7297 11.2899C13.0197 11.5799 13.0197 12.0599 12.7297 12.3499L11.3198 13.7599C11.0798 13.9999 10.9498 14.3099 10.9498 14.6399C10.9498 14.9699 11.0798 15.2899 11.3198 15.5199C11.8098 16.0099 12.5998 16.0099 13.0898 15.5199L15.3098 13.2999C16.5798 12.0299 16.5798 9.96994 15.3098 8.69994C14.0398 7.42994 11.9798 7.42994 10.7098 8.69994L8.28973 11.1199C7.77973 11.6299 7.49976 12.2999 7.49976 13.0099C7.49976 13.7199 7.77973 14.3999 8.28973 14.8999C8.57973 15.1899 8.57973 15.6699 8.28973 15.9599C7.99973 16.2499 7.51974 16.2499 7.22974 15.9599C6.43974 15.1699 6.00977 14.1199 6.00977 12.9999C6.00977 11.8799 6.43974 10.8299 7.22974 10.0399L9.64978 7.61992C11.4998 5.76992 14.5198 5.76992 16.3698 7.61992C18.2198 9.46992 18.2198 12.4899 16.3698 14.3399L14.1498 16.5599C13.6098 17.1099 12.9098 17.3799 12.1998 17.3799Z"
                  fill="#292D32"
                />
                <path
                  d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                  fill="#292D32"
                />
              </svg>

              <div className="dashboard-home__card2__chat__user-card__form__send">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 18L15.5 12L9.5 6"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div
            className={
              activeChat === 2
                ? "dashboard-home__card2__chat__user-card dashboard-home__card2__chat__user-card-active"
                : "dashboard-home__card2__chat__user-card"
            }
            onClick={() => setActiveChat(2)}
          >
            <div className="dashboard-home__card2__chat__user-card__inner">
              <Image
                className="dashboard-home__card2__chat__user-card__inner__img"
                alt=""
                src="/assets/logo3.png"
                width={48}
                height={48}
              />

              <svg
                width="14"
                height="14"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="active-svg"
              >
                <rect
                  x="1.25"
                  y="1.25"
                  width="15.5"
                  height="15.5"
                  rx="7.75"
                  fill="#12B76A"
                />
                <rect
                  x="1.25"
                  y="1.25"
                  width="15.5"
                  height="15.5"
                  rx="7.75"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>

              <div className="dashboard-home__card2__chat__user-card__inner__title-group">
                <h4>Ammi Watts</h4>
                <h4>Hey, I just finished the interview with the witness</h4>
              </div>
              <div className="dashboard-home__card2__chat__user-card__inner__timestamp">
                48m
              </div>
            </div>
            <div className="dashboard-home__card2__chat__user-card__chats">
              <div className="dashboard-home__card2__chat__user-card__chats__sent">
                <div className="dashboard-home__card2__chat__user-card__chats__sent__inner">
                  No problem at all! <br />
                  I'll be there in about 15 minutes.
                </div>

                <div className="dashboard-home__card2__chat__user-card__chats__sent__timestamp">
                  10:11
                </div>
              </div>

              <div className="dashboard-home__card2__chat__user-card__chats__sent">
                <div className="dashboard-home__card2__chat__user-card__chats__sent__inner">
                  I'll text you when I arrive.
                </div>

                <div className="dashboard-home__card2__chat__user-card__chats__sent__timestamp">
                  10:11
                </div>
              </div>

              <div className="dashboard-home__card2__chat__user-card__chats__received">
                <div className="dashboard-home__card2__chat__user-card__chats__received__inner">
                  Great!😊
                </div>

                <div className="dashboard-home__card2__chat__user-card__chats__received__timestamp">
                  10:12
                </div>
              </div>
            </div>

            <div className="dashboard-home__card2__chat__user-card__form">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0769 2.08691C6.55691 2.08691 2.08691 6.56691 2.08691 12.0869C2.08691 17.6069 6.55691 22.0869 12.0769 22.0869C17.6069 22.0869 22.0869 17.6069 22.0869 12.0869C22.0869 6.56691 17.6069 2.08691 12.0769 2.08691ZM8.58691 8.08691C9.41691 8.08691 10.0869 8.75691 10.0869 9.58691C10.0869 10.4169 9.41691 11.0869 8.58691 11.0869C7.75691 11.0869 7.08691 10.4169 7.08691 9.58691C7.08691 8.75691 7.75691 8.08691 8.58691 8.08691ZM12.0869 18.0869C9.80691 18.0869 7.86691 16.4269 7.08691 14.0869H17.0869C16.3069 16.4269 14.3669 18.0869 12.0869 18.0869ZM15.5869 11.0869C14.7569 11.0869 14.0869 10.4169 14.0869 9.58691C14.0869 8.75691 14.7569 8.08691 15.5869 8.08691C16.4169 8.08691 17.0869 8.75691 17.0869 9.58691C17.0869 10.4169 16.4169 11.0869 15.5869 11.0869Z"
                  fill="#00B505"
                />
              </svg>

              <input type="text" placeholder="Type your message here ..." />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.1998 17.3799C11.4998 17.3799 10.7898 17.1099 10.2598 16.5799C9.73977 16.0599 9.44977 15.3699 9.44977 14.6399C9.44977 13.9099 9.73977 13.2099 10.2598 12.6999L11.6697 11.2899C11.9597 10.9999 12.4397 10.9999 12.7297 11.2899C13.0197 11.5799 13.0197 12.0599 12.7297 12.3499L11.3198 13.7599C11.0798 13.9999 10.9498 14.3099 10.9498 14.6399C10.9498 14.9699 11.0798 15.2899 11.3198 15.5199C11.8098 16.0099 12.5998 16.0099 13.0898 15.5199L15.3098 13.2999C16.5798 12.0299 16.5798 9.96994 15.3098 8.69994C14.0398 7.42994 11.9798 7.42994 10.7098 8.69994L8.28973 11.1199C7.77973 11.6299 7.49976 12.2999 7.49976 13.0099C7.49976 13.7199 7.77973 14.3999 8.28973 14.8999C8.57973 15.1899 8.57973 15.6699 8.28973 15.9599C7.99973 16.2499 7.51974 16.2499 7.22974 15.9599C6.43974 15.1699 6.00977 14.1199 6.00977 12.9999C6.00977 11.8799 6.43974 10.8299 7.22974 10.0399L9.64978 7.61992C11.4998 5.76992 14.5198 5.76992 16.3698 7.61992C18.2198 9.46992 18.2198 12.4899 16.3698 14.3399L14.1498 16.5599C13.6098 17.1099 12.9098 17.3799 12.1998 17.3799Z"
                  fill="#292D32"
                />
                <path
                  d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                  fill="#292D32"
                />
              </svg>

              <div className="dashboard-home__card2__chat__user-card__form__send">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 18L15.5 12L9.5 6"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-home__card2__chat">
          <div className="dashboard-home__card2__chat__title-group">
            <h2>Email</h2>
            <h3
              className="pointer"
              onClick={() => (window.location.href = "/justice/dashboard/chat")}
            >
              View All
            </h3>
          </div>

          <div
            className={
              activeChat === 0
                ? "dashboard-home__card2__chat__user-card dashboard-home__card2__chat__user-card-active"
                : "dashboard-home__card2__chat__user-card"
            }
            onClick={() => setActiveChat(0)}
          >
            <div className="dashboard-home__card2__chat__user-card__inner">
              <div className="dashboard-home__card2__chat__user-card__inner__circle">
                CW
              </div>

              <div className="dashboard-home__card2__chat__user-card__inner__title-group">
                <h4>Request for Asset Seizure Resources</h4>
                <h4>Your interest for the international Center for Lang...</h4>
              </div>
              <div className="dashboard-home__card2__chat__user-card__inner__timestamp">
                12:58
              </div>
            </div>
          </div>

          <div
            className={
              activeChat === 0
                ? "dashboard-home__card2__chat__user-card dashboard-home__card2__chat__user-card-active"
                : "dashboard-home__card2__chat__user-card"
            }
            onClick={() => setActiveChat(0)}
          >
            <div className="dashboard-home__card2__chat__user-card__inner">
              <div className="dashboard-home__card2__chat__user-card__inner__circle">
                CW
              </div>

              <div className="dashboard-home__card2__chat__user-card__inner__title-group">
                <h4>Request for Asset Seizure Resources</h4>
                <h4>Your interest for the international Center for Lang...</h4>
              </div>
              <div className="dashboard-home__card2__chat__user-card__inner__timestamp">
                12:58
              </div>
            </div>
          </div>

          <div
            className={
              activeChat === 1
                ? "dashboard-home__card2__chat__user-card dashboard-home__card2__chat__user-card-active"
                : "dashboard-home__card2__chat__user-card"
            }
            onClick={() => setActiveChat(1)}
          >
            <div className="dashboard-home__card2__chat__user-card__inner">
              <div className="dashboard-home__card2__chat__user-card__inner__circle">
                CW
              </div>

              <div className="dashboard-home__card2__chat__user-card__inner__title-group">
                <h4>Request for Asset Seizure Resources</h4>
                <h4>Your interest for the international Center for Lang...</h4>
              </div>
              <div className="dashboard-home__card2__chat__user-card__inner__timestamp">
                12:58
              </div>
            </div>
    
          </div>

          <div
            className={
              activeChat === 2
                ? "dashboard-home__card2__chat__user-card dashboard-home__card2__chat__user-card-active"
                : "dashboard-home__card2__chat__user-card"
            }
            onClick={() => setActiveChat(2)}
          >
            <div className="dashboard-home__card2__chat__user-card__inner">
              <div className="dashboard-home__card2__chat__user-card__inner__circle">
                CW
              </div>

              <div className="dashboard-home__card2__chat__user-card__inner__title-group">
                <h4>Request for Asset Seizure Resources</h4>
                <h4>Your interest for the international Center for Lang...</h4>
              </div>
              <div className="dashboard-home__card2__chat__user-card__inner__timestamp">
                12:58
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
