"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import axios from "axios";

const AddProfile = () => {
  const [bvn, setBvn] = useState("");
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);
  const [mugLoading, setMugLoading] = useState(false);
  const mediaRef = useRef("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 11 && /^[0-9]*$/.test(value)) {
      setBvn(value);
      setError("");
    }
  };

  // const handleMugShotUpload = (e, docType) => {
  //   setMugLoading(true);

  //   let files = e.target.files;
  // }

  const handleMugShotUpload = (e, docType) => {
    setMugLoading(true);

    let files = e.target.files;

    const fileToUri = (file, cb) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        cb(null, reader.result);
      };
      reader.onerror = function (error) {
        cb(error, null);
      };
    };

    if (files) {
      for (let i = 0; i < files.length; i++) {
        fileToUri(files[0], (err, result) => {
          if (result) {
            console.log("result", result);

            axios
              .post(
                `https://kaxl3c7ehj.execute-api.us-east-1.amazonaws.com/dev/v1/upload`,
                {
                  user: "teddy",
                  media_type: docType,
                  contents: result,
                }
                // ,{
                //   headers: {
                //     Authorization: `Bearer ${auth ? auth.token : ""}`,
                //   },
                // }
              )
              .then((response) => {
                console.log("response file uploaded", response);
                if (response?.status === 200) {
                  const temp = images;
                  temp.unshift({ url: response?.data?.body?.data });
                  setImages([...temp]);
                }
                setMugLoading(false);
              })
              .catch((err) => {
                console.log("ERRRR", err);
                setMugLoading(false);
                alert("Mugshot upload failed. please try again");
              });
          }
        });
      }
    }
  };

  const handleMugshotRemove = (index) => {
    console.log("index", index);
    const temp = images;
    console.log("temp", temp);
    temp?.splice(index, 1);
    setImages([...temp]);
  };

  return (
    <div className="add-profile">
      <div className="add-profile__header">
        <div className="add-profile__header__title">
          Link Existing Suspect Profile
        </div>

        <div className="add-profile__header__btn">
          <button 
            className="cancel-btn"
            onClick={() => {
              window.location.href = `/justice/dashboard/suspect/no-match`;
            }}
          >
            Cancel
          </button>
          <button
            className="save-btn"
            onClick={() => {
              window.location.href = `/justice/dashboard/suspect/list`;
            }}
          >
            Save
          </button>
        </div>
      </div>

      <div className="add-profile__body">
        <div className="add-profile__body__left">

          <div className="add-profile__body__left__personal-details">
            {images?.length < 1 && (
              <label>
                {!mugLoading && (
                  <input
                    type="file"
                    name=""
                    id=""
                    hidden
                    ref={mediaRef}
                    accept="image/*"
                    onChange={(e) => handleMugShotUpload(e, "png")}
                  />
                )}
                <div className="add-profile__body__left__personal-details__upload-image">
                  {!mugLoading ? (
                    <svg
                      width="95"
                      height="73"
                      viewBox="0 0 95 73"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M63.7002 28.0299L58.4836 15.8299C57.5336 13.5965 56.1169 12.3299 54.5002 12.2465C52.9002 12.1632 51.3502 13.2799 50.1669 15.4132L47.0002 21.0965C46.3336 22.2965 45.3836 23.0132 44.3502 23.0965C43.3002 23.1965 42.2502 22.6465 41.4002 21.5632L41.0336 21.0965C39.8502 19.6132 38.3836 18.8965 36.8836 19.0465C35.3836 19.1965 34.1002 20.2299 33.2502 21.9132L30.3669 27.6632C29.3336 29.7465 29.4336 32.1632 30.6502 34.1299C31.8669 36.0965 33.9836 37.2799 36.3002 37.2799H57.5669C59.8002 37.2799 61.8836 36.1632 63.1169 34.2965C64.3836 32.4299 64.5836 30.0799 63.7002 28.0299Z"
                        fill="#64748B"
                      />
                      <path
                        d="M38.6167 13.9698C41.7279 13.9698 44.2501 11.4477 44.2501 8.33646C44.2501 5.22525 41.7279 2.70312 38.6167 2.70312C35.5055 2.70312 32.9834 5.22525 32.9834 8.33646C32.9834 11.4477 35.5055 13.9698 38.6167 13.9698Z"
                        fill="#64748B"
                      />
                      <path
                        d="M8.62376 66.388C8.62376 67.6667 8.28309 68.628 7.60176 69.272C6.92043 69.9067 5.94976 70.224 4.68976 70.224C3.40176 70.224 2.39376 69.9207 1.66576 69.314C0.947091 68.698 0.587758 67.7227 0.587758 66.388V60.004H1.91776V66.388C1.91776 67.284 2.15576 67.9653 2.63176 68.432C3.10776 68.8893 3.79376 69.118 4.68976 69.118C5.53909 69.118 6.18309 68.8893 6.62176 68.432C7.06976 67.9653 7.29376 67.284 7.29376 66.388V60.004H8.62376V66.388ZM10.5933 62.762H11.7833V63.742H11.8113C12.0073 63.3407 12.3153 63.0513 12.7353 62.874C13.1553 62.6873 13.6173 62.594 14.1213 62.594C14.6813 62.594 15.1666 62.6967 15.5773 62.902C15.9973 63.1073 16.3426 63.3873 16.6133 63.742C16.8933 64.0873 17.1033 64.4887 17.2433 64.946C17.3833 65.4033 17.4533 65.8887 17.4533 66.402C17.4533 66.9153 17.3833 67.4007 17.2433 67.858C17.1126 68.3153 16.9073 68.7167 16.6273 69.062C16.3566 69.398 16.0113 69.664 15.5913 69.86C15.1806 70.056 14.6999 70.154 14.1493 70.154C13.9719 70.154 13.7713 70.1353 13.5473 70.098C13.3326 70.0607 13.1179 70 12.9033 69.916C12.6886 69.832 12.4833 69.72 12.2873 69.58C12.1006 69.4307 11.9419 69.2487 11.8113 69.034H11.7833V72.758H10.5933V62.762ZM16.1933 66.318C16.1933 65.982 16.1466 65.6553 16.0533 65.338C15.9693 65.0113 15.8339 64.722 15.6473 64.47C15.4699 64.218 15.2366 64.0173 14.9473 63.868C14.6673 63.7187 14.3359 63.644 13.9533 63.644C13.5519 63.644 13.2113 63.7233 12.9313 63.882C12.6513 64.0407 12.4226 64.2507 12.2453 64.512C12.0679 64.764 11.9373 65.0533 11.8533 65.38C11.7786 65.7067 11.7413 66.038 11.7413 66.374C11.7413 66.7287 11.7833 67.074 11.8673 67.41C11.9513 67.7367 12.0819 68.026 12.2593 68.278C12.4459 68.53 12.6839 68.7353 12.9733 68.894C13.2626 69.0433 13.6126 69.118 14.0233 69.118C14.4339 69.118 14.7746 69.0387 15.0453 68.88C15.3253 68.7213 15.5493 68.5113 15.7173 68.25C15.8853 67.9887 16.0066 67.69 16.0813 67.354C16.1559 67.018 16.1933 66.6727 16.1933 66.318ZM18.9201 60.004H20.1101V70H18.9201V60.004ZM22.8216 66.388C22.8216 66.8267 22.8776 67.2187 22.9896 67.564C23.111 67.9 23.2743 68.1847 23.4796 68.418C23.685 68.642 23.923 68.8147 24.1936 68.936C24.4736 69.0573 24.7676 69.118 25.0756 69.118C25.3836 69.118 25.673 69.0573 25.9436 68.936C26.2236 68.8147 26.4663 68.642 26.6716 68.418C26.877 68.1847 27.0356 67.9 27.1476 67.564C27.269 67.2187 27.3296 66.8267 27.3296 66.388C27.3296 65.9493 27.269 65.562 27.1476 65.226C27.0356 64.8807 26.877 64.5913 26.6716 64.358C26.4663 64.1247 26.2236 63.9473 25.9436 63.826C25.673 63.7047 25.3836 63.644 25.0756 63.644C24.7676 63.644 24.4736 63.7047 24.1936 63.826C23.923 63.9473 23.685 64.1247 23.4796 64.358C23.2743 64.5913 23.111 64.8807 22.9896 65.226C22.8776 65.562 22.8216 65.9493 22.8216 66.388ZM21.5616 66.388C21.5616 65.856 21.6363 65.3613 21.7856 64.904C21.935 64.4373 22.159 64.036 22.4576 63.7C22.7563 63.3547 23.125 63.084 23.5636 62.888C24.0023 62.692 24.5063 62.594 25.0756 62.594C25.6543 62.594 26.1583 62.692 26.5876 62.888C27.0263 63.084 27.395 63.3547 27.6936 63.7C27.9923 64.036 28.2163 64.4373 28.3656 64.904C28.515 65.3613 28.5896 65.856 28.5896 66.388C28.5896 66.92 28.515 67.4147 28.3656 67.872C28.2163 68.3293 27.9923 68.7307 27.6936 69.076C27.395 69.412 27.0263 69.678 26.5876 69.874C26.1583 70.0607 25.6543 70.154 25.0756 70.154C24.5063 70.154 24.0023 70.0607 23.5636 69.874C23.125 69.678 22.7563 69.412 22.4576 69.076C22.159 68.7307 21.935 68.3293 21.7856 67.872C21.6363 67.4147 21.5616 66.92 21.5616 66.388ZM36.4047 69.972C36.1993 70.0933 35.9147 70.154 35.5507 70.154C35.2427 70.154 34.9953 70.07 34.8087 69.902C34.6313 69.7247 34.5427 69.44 34.5427 69.048C34.216 69.44 33.8333 69.7247 33.3947 69.902C32.9653 70.07 32.4987 70.154 31.9947 70.154C31.668 70.154 31.3553 70.1167 31.0567 70.042C30.7673 69.9673 30.5153 69.8507 30.3007 69.692C30.086 69.5333 29.9133 69.328 29.7827 69.076C29.6613 68.8147 29.6007 68.502 29.6007 68.138C29.6007 67.7273 29.6707 67.3913 29.8107 67.13C29.9507 66.8687 30.1327 66.6587 30.3567 66.5C30.59 66.332 30.8513 66.206 31.1407 66.122C31.4393 66.038 31.7427 65.968 32.0507 65.912C32.3773 65.8467 32.6853 65.8 32.9747 65.772C33.2733 65.7347 33.5347 65.688 33.7587 65.632C33.9827 65.5667 34.16 65.478 34.2907 65.366C34.4213 65.2447 34.4867 65.072 34.4867 64.848C34.4867 64.5867 34.4353 64.3767 34.3327 64.218C34.2393 64.0593 34.1133 63.938 33.9547 63.854C33.8053 63.77 33.6327 63.714 33.4367 63.686C33.25 63.658 33.0633 63.644 32.8767 63.644C32.3727 63.644 31.9527 63.742 31.6167 63.938C31.2807 64.1247 31.0987 64.484 31.0707 65.016H29.8807C29.8993 64.568 29.9927 64.19 30.1607 63.882C30.3287 63.574 30.5527 63.3267 30.8327 63.14C31.1127 62.944 31.43 62.804 31.7847 62.72C32.1487 62.636 32.536 62.594 32.9467 62.594C33.2733 62.594 33.5953 62.6173 33.9127 62.664C34.2393 62.7107 34.5333 62.8087 34.7947 62.958C35.056 63.098 35.266 63.2987 35.4247 63.56C35.5833 63.8213 35.6627 64.162 35.6627 64.582V68.306C35.6627 68.586 35.6767 68.7913 35.7047 68.922C35.742 69.0527 35.854 69.118 36.0407 69.118C36.1433 69.118 36.2647 69.0947 36.4047 69.048V69.972ZM34.4727 66.262C34.3233 66.374 34.1273 66.458 33.8847 66.514C33.642 66.5607 33.3853 66.6027 33.1147 66.64C32.8533 66.668 32.5873 66.7053 32.3167 66.752C32.046 66.7893 31.8033 66.8547 31.5887 66.948C31.374 67.0413 31.1967 67.1767 31.0567 67.354C30.926 67.522 30.8607 67.7553 30.8607 68.054C30.8607 68.25 30.898 68.418 30.9727 68.558C31.0567 68.6887 31.1593 68.796 31.2807 68.88C31.4113 68.964 31.5607 69.0247 31.7287 69.062C31.8967 69.0993 32.074 69.118 32.2607 69.118C32.6527 69.118 32.9887 69.0667 33.2687 68.964C33.5487 68.852 33.7773 68.7167 33.9547 68.558C34.132 68.39 34.2627 68.2127 34.3467 68.026C34.4307 67.83 34.4727 67.648 34.4727 67.48V66.262ZM38.3802 66.444C38.3802 66.78 38.4222 67.1113 38.5062 67.438C38.5995 67.7553 38.7349 68.04 38.9122 68.292C39.0989 68.544 39.3322 68.7447 39.6122 68.894C39.9015 69.0433 40.2375 69.118 40.6202 69.118C41.0215 69.118 41.3622 69.0387 41.6422 68.88C41.9222 68.7213 42.1509 68.516 42.3282 68.264C42.5055 68.0027 42.6315 67.7087 42.7062 67.382C42.7902 67.0553 42.8322 66.724 42.8322 66.388C42.8322 66.0333 42.7902 65.6927 42.7062 65.366C42.6222 65.03 42.4869 64.736 42.3002 64.484C42.1229 64.232 41.8895 64.0313 41.6002 63.882C41.3109 63.7233 40.9609 63.644 40.5502 63.644C40.1489 63.644 39.8082 63.7233 39.5282 63.882C39.2482 64.0407 39.0242 64.2507 38.8562 64.512C38.6882 64.7733 38.5669 65.072 38.4922 65.408C38.4175 65.744 38.3802 66.0893 38.3802 66.444ZM43.9802 70H42.7902V69.02H42.7622C42.5662 69.4213 42.2582 69.7107 41.8382 69.888C41.4182 70.0653 40.9562 70.154 40.4522 70.154C39.8922 70.154 39.4022 70.0513 38.9822 69.846C38.5715 69.6407 38.2262 69.3653 37.9462 69.02C37.6755 68.6747 37.4702 68.2733 37.3302 67.816C37.1902 67.3587 37.1202 66.8733 37.1202 66.36C37.1202 65.8467 37.1855 65.3613 37.3162 64.904C37.4562 64.4467 37.6615 64.05 37.9322 63.714C38.2122 63.3687 38.5575 63.098 38.9682 62.902C39.3882 62.6967 39.8735 62.594 40.4242 62.594C40.6109 62.594 40.8115 62.6127 41.0262 62.65C41.2409 62.6873 41.4555 62.7527 41.6702 62.846C41.8849 62.93 42.0855 63.0467 42.2722 63.196C42.4682 63.336 42.6315 63.5133 42.7622 63.728H42.7902V60.004H43.9802V70ZM49.9595 60.004H51.2895V70H49.9595V60.004ZM53.3306 62.762H54.4506V63.826H54.4786C55.0199 63.0047 55.7992 62.594 56.8166 62.594C57.2646 62.594 57.6706 62.6873 58.0346 62.874C58.3986 63.0607 58.6552 63.378 58.8046 63.826C59.0472 63.434 59.3646 63.1307 59.7566 62.916C60.1579 62.7013 60.5966 62.594 61.0726 62.594C61.4366 62.594 61.7632 62.636 62.0526 62.72C62.3512 62.7947 62.6032 62.916 62.8086 63.084C63.0232 63.252 63.1866 63.4713 63.2986 63.742C63.4199 64.0033 63.4806 64.3207 63.4806 64.694V70H62.2906V65.254C62.2906 65.03 62.2719 64.82 62.2346 64.624C62.1972 64.428 62.1272 64.26 62.0246 64.12C61.9219 63.9707 61.7772 63.854 61.5906 63.77C61.4132 63.686 61.1799 63.644 60.8906 63.644C60.3026 63.644 59.8406 63.812 59.5046 64.148C59.1686 64.484 59.0006 64.932 59.0006 65.492V70H57.8106V65.254C57.8106 65.0207 57.7872 64.806 57.7406 64.61C57.7032 64.414 57.6332 64.246 57.5306 64.106C57.4279 63.9567 57.2879 63.8447 57.1106 63.77C56.9426 63.686 56.7232 63.644 56.4526 63.644C56.1072 63.644 55.8086 63.714 55.5566 63.854C55.3139 63.994 55.1132 64.162 54.9546 64.358C54.8052 64.554 54.6932 64.7593 54.6186 64.974C54.5532 65.1793 54.5206 65.352 54.5206 65.492V70H53.3306V62.762ZM71.6781 69.972C71.4728 70.0933 71.1881 70.154 70.8241 70.154C70.5161 70.154 70.2688 70.07 70.0821 69.902C69.9048 69.7247 69.8161 69.44 69.8161 69.048C69.4895 69.44 69.1068 69.7247 68.6681 69.902C68.2388 70.07 67.7721 70.154 67.2681 70.154C66.9415 70.154 66.6288 70.1167 66.3301 70.042C66.0408 69.9673 65.7888 69.8507 65.5741 69.692C65.3595 69.5333 65.1868 69.328 65.0561 69.076C64.9348 68.8147 64.8741 68.502 64.8741 68.138C64.8741 67.7273 64.9441 67.3913 65.0841 67.13C65.2241 66.8687 65.4061 66.6587 65.6301 66.5C65.8635 66.332 66.1248 66.206 66.4141 66.122C66.7128 66.038 67.0161 65.968 67.3241 65.912C67.6508 65.8467 67.9588 65.8 68.2481 65.772C68.5468 65.7347 68.8081 65.688 69.0321 65.632C69.2561 65.5667 69.4335 65.478 69.5641 65.366C69.6948 65.2447 69.7601 65.072 69.7601 64.848C69.7601 64.5867 69.7088 64.3767 69.6061 64.218C69.5128 64.0593 69.3868 63.938 69.2281 63.854C69.0788 63.77 68.9061 63.714 68.7101 63.686C68.5235 63.658 68.3368 63.644 68.1501 63.644C67.6461 63.644 67.2261 63.742 66.8901 63.938C66.5541 64.1247 66.3721 64.484 66.3441 65.016H65.1541C65.1728 64.568 65.2661 64.19 65.4341 63.882C65.6021 63.574 65.8261 63.3267 66.1061 63.14C66.3861 62.944 66.7035 62.804 67.0581 62.72C67.4221 62.636 67.8095 62.594 68.2201 62.594C68.5468 62.594 68.8688 62.6173 69.1861 62.664C69.5128 62.7107 69.8068 62.8087 70.0681 62.958C70.3295 63.098 70.5395 63.2987 70.6981 63.56C70.8568 63.8213 70.9361 64.162 70.9361 64.582V68.306C70.9361 68.586 70.9501 68.7913 70.9781 68.922C71.0155 69.0527 71.1275 69.118 71.3141 69.118C71.4168 69.118 71.5381 69.0947 71.6781 69.048V69.972ZM69.7461 66.262C69.5968 66.374 69.4008 66.458 69.1581 66.514C68.9155 66.5607 68.6588 66.6027 68.3881 66.64C68.1268 66.668 67.8608 66.7053 67.5901 66.752C67.3195 66.7893 67.0768 66.8547 66.8621 66.948C66.6475 67.0413 66.4701 67.1767 66.3301 67.354C66.1995 67.522 66.1341 67.7553 66.1341 68.054C66.1341 68.25 66.1715 68.418 66.2461 68.558C66.3301 68.6887 66.4328 68.796 66.5541 68.88C66.6848 68.964 66.8341 69.0247 67.0021 69.062C67.1701 69.0993 67.3475 69.118 67.5341 69.118C67.9261 69.118 68.2621 69.0667 68.5421 68.964C68.8221 68.852 69.0508 68.7167 69.2281 68.558C69.4055 68.39 69.5361 68.2127 69.6201 68.026C69.7041 67.83 69.7461 67.648 69.7461 67.48V66.262ZM79.0296 69.384C79.0296 70.5693 78.759 71.456 78.2176 72.044C77.6763 72.632 76.827 72.926 75.6696 72.926C75.3336 72.926 74.9883 72.8887 74.6336 72.814C74.2883 72.7393 73.971 72.618 73.6816 72.45C73.4016 72.282 73.1683 72.0627 72.9816 71.792C72.795 71.5213 72.6923 71.19 72.6736 70.798H73.8636C73.873 71.0127 73.9383 71.1947 74.0596 71.344C74.1903 71.4933 74.3443 71.6147 74.5216 71.708C74.7083 71.8013 74.909 71.8667 75.1236 71.904C75.3383 71.9507 75.5436 71.974 75.7396 71.974C76.1316 71.974 76.463 71.904 76.7336 71.764C77.0043 71.6333 77.2283 71.4467 77.4056 71.204C77.583 70.9707 77.709 70.686 77.7836 70.35C77.8676 70.014 77.9096 69.6453 77.9096 69.244V68.768H77.8816C77.6763 69.216 77.3636 69.5473 76.9436 69.762C76.533 69.9673 76.0943 70.07 75.6276 70.07C75.0863 70.07 74.615 69.972 74.2136 69.776C73.8123 69.58 73.4763 69.3187 73.2056 68.992C72.935 68.656 72.7296 68.2687 72.5896 67.83C72.459 67.382 72.3936 66.9107 72.3936 66.416C72.3936 65.9867 72.4496 65.548 72.5616 65.1C72.6736 64.6427 72.8603 64.232 73.1216 63.868C73.383 63.4947 73.7283 63.1913 74.1576 62.958C74.587 62.7153 75.1143 62.594 75.7396 62.594C76.197 62.594 76.617 62.6967 76.9996 62.902C77.3823 63.098 77.681 63.3967 77.8956 63.798H77.9096V62.762H79.0296V69.384ZM75.6976 69.034C76.0896 69.034 76.421 68.9547 76.6916 68.796C76.9716 68.628 77.1956 68.4133 77.3636 68.152C77.5316 67.8813 77.653 67.578 77.7276 67.242C77.8116 66.906 77.8536 66.57 77.8536 66.234C77.8536 65.9167 77.8163 65.604 77.7416 65.296C77.667 64.988 77.5456 64.7127 77.3776 64.47C77.219 64.218 77.009 64.0173 76.7476 63.868C76.4863 63.7187 76.169 63.644 75.7956 63.644C75.413 63.644 75.0863 63.7187 74.8156 63.868C74.545 64.008 74.321 64.1993 74.1436 64.442C73.9756 64.6847 73.8496 64.9647 73.7656 65.282C73.691 65.5993 73.6536 65.9307 73.6536 66.276C73.6536 66.6027 73.6863 66.9293 73.7516 67.256C73.817 67.5827 73.929 67.8813 74.0876 68.152C74.2463 68.4133 74.4563 68.628 74.7176 68.796C74.979 68.9547 75.3056 69.034 75.6976 69.034ZM85.8507 65.688C85.832 65.408 85.7667 65.142 85.6547 64.89C85.552 64.638 85.4074 64.4233 85.2207 64.246C85.0434 64.0593 84.8287 63.9147 84.5767 63.812C84.334 63.7 84.0634 63.644 83.7647 63.644C83.4567 63.644 83.1767 63.7 82.9247 63.812C82.682 63.9147 82.472 64.0593 82.2947 64.246C82.1174 64.4327 81.9774 64.652 81.8747 64.904C81.772 65.1467 81.7114 65.408 81.6927 65.688H85.8507ZM86.9987 67.704C86.84 68.516 86.49 69.1273 85.9487 69.538C85.4074 69.9487 84.726 70.154 83.9047 70.154C83.326 70.154 82.822 70.0607 82.3927 69.874C81.9727 69.6873 81.618 69.426 81.3287 69.09C81.0394 68.754 80.82 68.3527 80.6707 67.886C80.5307 67.4193 80.4514 66.9107 80.4327 66.36C80.4327 65.8093 80.5167 65.3053 80.6847 64.848C80.8527 64.3907 81.086 63.994 81.3847 63.658C81.6927 63.322 82.052 63.0607 82.4627 62.874C82.8827 62.6873 83.34 62.594 83.8347 62.594C84.4787 62.594 85.0107 62.7293 85.4307 63C85.86 63.2613 86.2007 63.5973 86.4527 64.008C86.714 64.4187 86.8914 64.8667 86.9847 65.352C87.0874 65.8373 87.1294 66.2993 87.1107 66.738H81.6927C81.6834 67.0553 81.7207 67.3587 81.8047 67.648C81.8887 67.928 82.024 68.18 82.2107 68.404C82.3974 68.6187 82.6354 68.7913 82.9247 68.922C83.214 69.0527 83.5547 69.118 83.9467 69.118C84.4507 69.118 84.8614 69.0013 85.1787 68.768C85.5054 68.5347 85.72 68.18 85.8227 67.704H86.9987ZM89.0722 67.718C89.0816 67.9793 89.1422 68.2033 89.2542 68.39C89.3662 68.5673 89.5109 68.712 89.6882 68.824C89.8749 68.9267 90.0802 69.0013 90.3042 69.048C90.5376 69.0947 90.7756 69.118 91.0182 69.118C91.2049 69.118 91.4009 69.104 91.6062 69.076C91.8116 69.048 91.9982 68.9967 92.1662 68.922C92.3436 68.8473 92.4882 68.74 92.6002 68.6C92.7122 68.4507 92.7682 68.264 92.7682 68.04C92.7682 67.732 92.6516 67.4987 92.4182 67.34C92.1849 67.1813 91.8909 67.0553 91.5362 66.962C91.1909 66.8593 90.8129 66.7707 90.4022 66.696C89.9916 66.612 89.6089 66.5 89.2542 66.36C88.9089 66.2107 88.6196 66.0053 88.3862 65.744C88.1529 65.4827 88.0362 65.1187 88.0362 64.652C88.0362 64.288 88.1156 63.9753 88.2742 63.714C88.4422 63.4527 88.6522 63.2427 88.9042 63.084C89.1656 62.916 89.4549 62.7947 89.7722 62.72C90.0989 62.636 90.4209 62.594 90.7382 62.594C91.1489 62.594 91.5269 62.6313 91.8722 62.706C92.2176 62.7713 92.5209 62.8927 92.7822 63.07C93.0529 63.238 93.2676 63.4713 93.4262 63.77C93.5849 64.0593 93.6782 64.4233 93.7062 64.862H92.5162C92.4976 64.6287 92.4369 64.4373 92.3342 64.288C92.2316 64.1293 92.1009 64.0033 91.9422 63.91C91.7836 63.8167 91.6062 63.7513 91.4102 63.714C91.2236 63.6673 91.0322 63.644 90.8362 63.644C90.6589 63.644 90.4769 63.658 90.2902 63.686C90.1129 63.714 89.9496 63.7653 89.8002 63.84C89.6509 63.9053 89.5296 63.9987 89.4362 64.12C89.3429 64.232 89.2962 64.3813 89.2962 64.568C89.2962 64.7733 89.3662 64.946 89.5062 65.086C89.6556 65.2167 89.8422 65.3287 90.0662 65.422C90.2902 65.506 90.5422 65.5807 90.8222 65.646C91.1022 65.702 91.3822 65.7627 91.6622 65.828C91.9609 65.8933 92.2502 65.9727 92.5302 66.066C92.8196 66.1593 93.0716 66.2853 93.2862 66.444C93.5102 66.5933 93.6876 66.7847 93.8182 67.018C93.9582 67.2513 94.0282 67.5407 94.0282 67.886C94.0282 68.3247 93.9349 68.6887 93.7482 68.978C93.5709 69.2673 93.3329 69.5007 93.0342 69.678C92.7449 69.8553 92.4136 69.9767 92.0402 70.042C91.6762 70.1167 91.3122 70.154 90.9482 70.154C90.5469 70.154 90.1642 70.112 89.8002 70.028C89.4362 69.944 89.1142 69.8087 88.8342 69.622C88.5542 69.426 88.3302 69.174 88.1622 68.866C87.9942 68.5487 87.9009 68.166 87.8822 67.718H89.0722Z"
                        fill="#00B505"
                      />
                    </svg>
                  ) : (
                    "Loading..."
                  )}
                </div>
              </label>
            )}

            {images?.length > 0 && (
              <div className="add-profile__body__left__personal-details__image-preview">
                <Image
                  alt=""
                  src={`https://${images[images?.length - 1]?.url}`}
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "16px" }}
                />

                <svg
                  className="pointer"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleMugshotRemove(images?.length - 1)}
                >
                  <circle cx="16" cy="16" r="16" fill="#FFE1E9" />
                  <path
                    d="M10 12.0026H11.3333M11.3333 12.0026H22M11.3333 12.0026V21.3359C11.3333 21.6896 11.4738 22.0287 11.7239 22.2787C11.9739 22.5288 12.313 22.6693 12.6667 22.6693H19.3333C19.687 22.6693 20.0261 22.5288 20.2761 22.2787C20.5262 22.0287 20.6667 21.6896 20.6667 21.3359V12.0026H11.3333ZM13.3333 12.0026V10.6693C13.3333 10.3156 13.4738 9.97651 13.7239 9.72646C13.9739 9.47641 14.313 9.33594 14.6667 9.33594H17.3333C17.687 9.33594 18.0261 9.47641 18.2761 9.72646C18.5262 9.97651 18.6667 10.3156 18.6667 10.6693V12.0026M14.6667 15.3359V19.3359M17.3333 15.3359V19.3359"
                    stroke="#FF2C20"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            )}

            <div className="add-profile__body__left__personal-details__image-grid">
              {images?.length < 5 && images?.length > 0 ? (
                <label>
                  {!mugLoading && (
                    <input
                      type="file"
                      name=""
                      id=""
                      hidden
                      ref={mediaRef}
                      accept="image/*"
                      onChange={(e) => handleMugShotUpload(e, "png")}
                    />
                  )}
                  <svg
                    className="pointer"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.35"
                      y="0.35"
                      width="55.3"
                      height="55.3"
                      rx="7.65"
                      fill="white"
                      stroke="#64748B"
                      stroke-width="0.7"
                      stroke-dasharray="3 1"
                    />
                    <path
                      d="M28.0001 22.1641V33.8307M22.1667 27.9974H33.8334"
                      stroke="#64748B"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </label>
              ) : (
                ""
              )}
              {images?.map((item, index) => (
                <div
                  className="add-profile__body__left__personal-details__image-grid__image"
                  key={index}
                >
                  <Image
                    alt=""
                    src={`https://${item?.url}`}
                    objectFit="cover"
                    layout="fill"
                    style={{ borderRadius: "8px" }}
                  />

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleMugshotRemove(index)}
                  >
                    <circle cx="8" cy="8" r="8" fill="#FFE1E9" />
                    <g clip-path="url(#clip0_20_196388)">
                      <path
                        d="M5 5.9974H5.66667M5.66667 5.9974H11M5.66667 5.9974V10.6641C5.66667 10.8409 5.7369 11.0104 5.86193 11.1355C5.98695 11.2605 6.15652 11.3307 6.33333 11.3307H9.66667C9.84348 11.3307 10.013 11.2605 10.1381 11.1355C10.2631 11.0104 10.3333 10.8409 10.3333 10.6641V5.9974H5.66667ZM6.66667 5.9974V5.33073C6.66667 5.15392 6.7369 4.98435 6.86193 4.85932C6.98695 4.7343 7.15652 4.66406 7.33333 4.66406H8.66667C8.84348 4.66406 9.01305 4.7343 9.13807 4.85932C9.2631 4.98435 9.33333 5.15392 9.33333 5.33073V5.9974M7.33333 7.66406V9.66406M8.66667 7.66406V9.66406"
                        stroke="#FF2C20"
                        stroke-width="0.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_20_196388">
                        <rect
                          width="8"
                          height="8"
                          fill="white"
                          transform="translate(4 4)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="add-profile__body__left__personal-details__image-grid__image__overlay"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="add-profile__body__left__suspect-note">
            <svg
              width="7"
              height="40"
              viewBox="0 0 4 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 40C0.895431 40 0 39.1046 0 38V2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2V38C4 39.1046 3.10457 40 2 40Z"
                fill="#009B07"
              />
            </svg>
            <p>
              Add Mugshot and add pictures highlighting any tattoos, piercing or
              body scar
            </p>
          </div>

          <div className="add-profile__body__left__form">
            <form action="">
              <label>First Name</label>
              <div className="input">
                <input type="text" placeholder="Enter First Name" />
              </div>

              <label>Middle Name</label>
              <div className="input">
                <input type="text" placeholder="Enter Middle Name" />
              </div>

              <label>Last Name</label>
              <div className="input">
                <input type="text" placeholder="Enter Last Name" />
              </div>

              <label>Alias</label>
              <div className="input">
                <input type="text" placeholder="Enter Alias" />
              </div>

              <label>Phone Number</label>
              <div className="input">
                <input type="text" placeholder="Enter Phone Number" />
              </div>

              <label>Email</label>
              <div className="input">
                <input type="email" placeholder="Enter email" />
              </div>

              <label>Suspect Status:</label>
              <div className="input">
                <select name="" id="">
                  <option selected disabled>
                    Select Suspect Status
                  </option>
                  <option value="">Remanded In Jail</option>
                  <option value="">Under Investigation</option>
                  <option value="">Awaiting Trial</option>
                  <option value="">On Parole</option>
                </select>
              </div>

              <label>Known Associates:</label>
              <div className="input">
                <select name="" id="">
                  <option selected disabled>
                    Select associates
                  </option>
                  <option value="">Shekau Ahmed</option>
                  <option value="">Okoro Madu</option>
                  <option value="">Tonyi Adeniyi</option>
                </select>
              </div>

              <div className="associates">Shekau Ahmed</div>
              <div className="associates">Okoro Madu</div>
            </form>
          </div>
        </div>

        <div className="add-profile__body__right">
          <h2>Suspect Details</h2>
          <div className="suspect-details">
            <div className="form-group">
              <label>Nationality:</label>
              <div className="input">
                <input type="text" placeholder="Enter Nationality" />
              </div>
            </div>

            <div className="form-group">
              <label>State of Origin:</label>
              <div className="input">
                <select name="" id="">
                  <option selected disabled>
                    Select state
                  </option>
                  <option value="">Abuja</option>
                  <option value="">Anambra</option>
                  <option value="">Enugu</option>
                  <option value="">Kano</option>
                  <option value="">Kwara</option>
                  <option value="">Lagos</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>LGA of Origin:</label>
              <div className="input">
                <select name="" id="">
                  <option selected disabled>
                    Select LGA
                  </option>
                  <option value="">Awka</option>
                  <option value="">FCT</option>
                  <option value="">Ikeja</option>
                  <option value="">Ilorin</option>
                  <option value="">Kano</option>
                  <option value="">Nssuka</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Religion:</label>
              <div className="input">
                <select name="" id="">
                  <option selected disabled>
                    Select religion
                  </option>
                  <option value="">Christanity</option>
                  <option value="">Islam</option>
                  <option value="">others</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Sex:</label>
              <div className="input">
                <select name="" id="">
                  <option selected disabled>
                    Select gender
                  </option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Height:</label>
              <div className="input">
                <input type="text" placeholder="Enter height (in cm)" />
              </div>
            </div>

            <div className="form-group">
              <label>Weight:</label>
              <div className="input">
                <input type="text" placeholder="Enter weight (in kg)" />
              </div>
            </div>

            <div className="form-group">
              <label>Eye Colour:</label>
              <div className="input">
                <select name="" id="">
                  <option selected disabled>
                    Select
                  </option>
                  <option value="">Brown</option>
                  <option value="">Blue</option>
                  <option value="">Green</option>
                  <option value="">Black</option>
                  <option value="">Others</option>
                </select>
              </div>
            </div>
          </div>

          <hr />

          <h2>Identifying Information</h2>
          <div className="suspect-details">
            <div className="form-group">
              <label>BVN:</label>
              <div className="input">
                <input
                  type="text"
                  placeholder="Input BVN"
                  value={bvn}
                  onChange={handleInputChange}
                  maxLength={11}
                />

                {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
              </div>
            </div>

            <div className="form-group">
              <label>NIN:</label>
              <div className="input">
                <input type="text" placeholder="Input NIN" maxLength={11} />
              </div>
            </div>

            <div className="form-group">
              <label>Driver's License Number:</label>
              <div className="input">
                <input
                  type="text"
                  placeholder="Input Driver's License Number"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Passport Number:</label>
              <div className="input">
                <input type="text" placeholder="Passport Number" />
              </div>
            </div>
          </div>

          <hr />

          <h2>Finger Print</h2>

          <div className="fingerprint">
            <div className="fingerprint-input">
              <div className="fingerprint-input__box">
                <p>
                  Click to Input <br /> Fingerprint
                </p>
              </div>
              <div className="fingerprint-input__label">Right - thumb</div>
            </div>

            <div className="fingerprint-input">
              <div className="fingerprint-input__box">
                <p>
                  Click to Input <br /> Fingerprint
                </p>
              </div>
              <div className="fingerprint-input__label">
                Right - index finger
              </div>
            </div>

            <div className="fingerprint-input">
              <div className="fingerprint-input__box">
                <p>
                  Click to Input <br /> Fingerprint
                </p>
              </div>
              <div className="fingerprint-input__label">
                Right - middle finger
              </div>
            </div>

            <div className="fingerprint-input">
              <div className="fingerprint-input__box">
                <p>
                  Click to Input <br /> Fingerprint
                </p>
              </div>
              <div className="fingerprint-input__label">
                Right - ring finger
              </div>
            </div>

            <div className="fingerprint-input">
              <div className="fingerprint-input__box">
                <p>
                  Click to Input <br /> Fingerprint
                </p>
              </div>
              <div className="fingerprint-input__label">
                Right - little finger
              </div>
            </div>

            {/* --- */}

            <div className="fingerprint-input">
              <div className="fingerprint-input__box">
                <p>
                  Click to Input <br /> Fingerprint
                </p>
              </div>
              <div className="fingerprint-input__label">Left - thumb</div>
            </div>

            <div className="fingerprint-input">
              <div className="fingerprint-input__box">
                <p>
                  Click to Input <br /> Fingerprint
                </p>
              </div>
              <div className="fingerprint-input__label">
                Left - index finger
              </div>
            </div>

            <div className="fingerprint-input">
              <div className="fingerprint-input__box">
                <p>
                  Click to Input <br /> Fingerprint
                </p>
              </div>
              <div className="fingerprint-input__label">
                Left - middle finger
              </div>
            </div>

            <div className="fingerprint-input">
              <div className="fingerprint-input__box">
                <p>
                  Click to Input <br /> Fingerprint
                </p>
              </div>
              <div className="fingerprint-input__label">Left - ring finger</div>
            </div>

            <div className="fingerprint-input">
              <div className="fingerprint-input__box">
                <p>
                  Click to Input <br /> Fingerprint
                </p>
              </div>
              <div className="fingerprint-input__label">
                Left - little finger
              </div>
            </div>
          </div>

          <hr />

          <h2>Arrest Station Details</h2>
          <div className="arrest-details">
            <div className="arrest-group">
              <label>Name of Station:</label>
              <div className="input">
                <input type="text" placeholder="Enter Name of Station" />
              </div>
            </div>

            <div className="arrest-group">
              <label>Arresting Officer(s):</label>
              <div className="input">
                <select name="" id="">
                  <option selected disabled>
                    Select officer
                  </option>
                  <option value="">Shekau Ahmed</option>
                  <option value="">Okoro Madu</option>
                  <option value="">Tonyi Adeniyi</option>
                </select>
              </div>
            </div>

            <div className="arrest-group">
              <label>Station Head:</label>
              <div className="input">
                <select name="" id="">
                  <option selected disabled>
                    Select officer
                  </option>
                  <option value="">Shekau Ahmed</option>
                  <option value="">Okoro Madu</option>
                  <option value="">Tonyi Adeniyi</option>
                </select>
              </div>
            </div>

            <div className="arrest-group">
              <label>Police Divison:</label>
              <div className="input">
                <select name="" id="">
                  <option selected disabled>
                    Select
                  </option>
                  <option value="">FCT State Police Command</option>
                  <option value="">Lagos State Police Command</option>
                  <option value="">Kano State Police Command</option>
                  <option value="">Kwara State Police Command</option>
                </select>
              </div>
            </div>

            <div className="arrest-group">
              <label>Police Command:</label>
              <div className="input">
                <select name="" id="">
                  <option selected disabled>
                    Select Command
                  </option>
                  <option value="">FCT State Police Command</option>
                  <option value="">Lagos State Police Command</option>
                  <option value="">Kano State Police Command</option>
                  <option value="">Kwara State Police Command</option>
                </select>
              </div>
            </div>

            <div className="arrest-group">
              <label>Police Zone:</label>
              <div className="input">
                <select name="" id="">
                  <option selected disabled>
                    Select Zone
                  </option>
                  <option value="">Northwest region</option>
                  <option value="">Southwest region</option>
                  <option value="">North-Central region</option>
                </select>
              </div>
            </div>
          </div>

          <hr />

          <div className="h2">
            Document Seized Assets and Evidence relating to this case
          </div>

          <h3>Document Seized Asset</h3>

          <div className="asset">
            Link Asset
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99935 4.16406V15.8307M4.16602 9.9974H15.8327"
                stroke="#009A29"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          {/* <hr /> */}

          <div className="h2">
            Chargeable offense, Please create a case file or Charge sheet
          </div>

          <h3>Charge sheet and Case File</h3>

          <div className="charge-sheet">
            Create Case File
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99935 4.16406V15.8307M4.16602 9.9974H15.8327"
                stroke="#009A29"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProfile;
