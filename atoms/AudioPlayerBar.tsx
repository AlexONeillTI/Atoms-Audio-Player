import React, { useState, useRef, useEffect } from 'react';
import styles from './AudioPlayer.module.css';

const AudioPlayer = (props: { keyName: string }) => {
  const playbackSpeedButtons = [
    // eslint-disable-next-line react/jsx-key
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.1335 14.8182V25H15.9006V16.1108H15.8409L13.3551 17.7614V16.5085L15.9006 14.8182H17.1335ZM21.0227 17.3636L22.8522 20.4858L24.6818 17.3636H26.034L23.5681 21.1818L26.034 25H24.6818L22.8522 22.0369L21.0227 25H19.6704L22.0965 21.1818L19.6704 17.3636H21.0227Z"
        fill="#6B7280"
      />
    </svg>,
    // eslint-disable-next-line react/jsx-key
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.13352 14.8182V25H5.90057V16.1108H5.84091L3.35511 17.7614V16.5085L5.90057 14.8182H7.13352ZM10.4012 25.0795C10.156 25.0795 9.9455 24.9917 9.76984 24.8161C9.59417 24.6404 9.50634 24.4299 9.50634 24.1847C9.50634 23.9394 9.59417 23.7289 9.76984 23.5533C9.9455 23.3776 10.156 23.2898 10.4012 23.2898C10.6465 23.2898 10.857 23.3776 11.0326 23.5533C11.2083 23.7289 11.2961 23.9394 11.2961 24.1847C11.2961 24.3471 11.2547 24.4962 11.1718 24.6321C11.0923 24.768 10.9846 24.8774 10.8487 24.9602C10.7161 25.0398 10.5669 25.0795 10.4012 25.0795ZM13.4477 25V24.1051L16.8085 20.4261C17.2029 19.9953 17.5277 19.6207 17.7829 19.3026C18.0381 18.9811 18.2271 18.6795 18.3497 18.3977C18.4756 18.1127 18.5386 17.8144 18.5386 17.5028C18.5386 17.1449 18.4524 16.835 18.2801 16.5732C18.111 16.3113 17.879 16.1091 17.5841 15.9666C17.2891 15.8241 16.9576 15.7528 16.5897 15.7528C16.1986 15.7528 15.8573 15.834 15.5656 15.9964C15.2772 16.1555 15.0535 16.3793 14.8944 16.6676C14.7387 16.956 14.6608 17.294 14.6608 17.6818H13.4875C13.4875 17.0852 13.625 16.5616 13.9001 16.1108C14.1752 15.66 14.5497 15.3087 15.0237 15.0568C15.501 14.8049 16.0362 14.679 16.6295 14.679C17.2261 14.679 17.7548 14.8049 18.2155 15.0568C18.6762 15.3087 19.0374 15.6484 19.2993 16.076C19.5611 16.5036 19.692 16.9792 19.692 17.5028C19.692 17.8774 19.6241 18.2436 19.4882 18.6016C19.3556 18.9562 19.1236 19.3523 18.7922 19.7898C18.464 20.224 18.0083 20.7543 17.425 21.3807L15.138 23.8267V23.9062H19.871V25H13.4477ZM25.1721 25.1392C24.5887 25.1392 24.0634 25.0232 23.5961 24.7912C23.1288 24.5592 22.7542 24.241 22.4725 23.8366C22.1908 23.4323 22.0367 22.9716 22.0101 22.4545H23.2033C23.2497 22.9152 23.4585 23.2964 23.8297 23.598C24.2043 23.8963 24.6517 24.0455 25.1721 24.0455C25.5897 24.0455 25.9609 23.9477 26.2857 23.7521C26.6138 23.5566 26.8707 23.2881 27.0563 22.9467C27.2452 22.602 27.3397 22.2126 27.3397 21.7784C27.3397 21.3343 27.2419 20.9382 27.0464 20.5902C26.8541 20.2389 26.589 19.9621 26.2509 19.7599C25.9128 19.5578 25.5267 19.455 25.0925 19.4517C24.781 19.4484 24.4611 19.4964 24.133 19.5959C23.8049 19.692 23.5348 19.8163 23.3226 19.9688L22.1692 19.8295L22.7857 14.8182H28.0755V15.9119H23.8198L23.4618 18.9148H23.5215C23.7303 18.7491 23.9922 18.6115 24.307 18.5021C24.6219 18.3928 24.95 18.3381 25.2914 18.3381C25.9145 18.3381 26.4697 18.4872 26.9569 18.7855C27.4474 19.0805 27.8319 19.4848 28.1103 19.9986C28.392 20.5123 28.5329 21.099 28.5329 21.7585C28.5329 22.4081 28.387 22.9882 28.0954 23.4986C27.807 24.0057 27.4093 24.4067 26.9022 24.7017C26.3951 24.9934 25.8184 25.1392 25.1721 25.1392ZM31.4687 17.3636L33.2983 20.4858L35.1278 17.3636H36.4801L34.0142 21.1818L36.4801 25H35.1278L33.2983 22.0369L31.4687 25H30.1165L32.5426 21.1818L30.1165 17.3636H31.4687Z"
        fill="#6B7280"
      />
    </svg>,
    // eslint-disable-next-line react/jsx-key
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.6335 14.8182V25H10.4006V16.1108H10.3409L7.85511 17.7614V16.5085L10.4006 14.8182H11.6335ZM14.9012 25.0795C14.656 25.0795 14.4455 24.9917 14.2698 24.8161C14.0942 24.6404 14.0063 24.4299 14.0063 24.1847C14.0063 23.9394 14.0942 23.7289 14.2698 23.5533C14.4455 23.3776 14.656 23.2898 14.9012 23.2898C15.1465 23.2898 15.357 23.3776 15.5326 23.5533C15.7083 23.7289 15.7961 23.9394 15.7961 24.1847C15.7961 24.3471 15.7547 24.4962 15.6718 24.6321C15.5923 24.768 15.4846 24.8774 15.3487 24.9602C15.2161 25.0398 15.0669 25.0795 14.9012 25.0795ZM20.9244 25.1392C20.3411 25.1392 19.8158 25.0232 19.3484 24.7912C18.8811 24.5592 18.5066 24.241 18.2249 23.8366C17.9431 23.4323 17.789 22.9716 17.7625 22.4545H18.9557C19.0021 22.9152 19.2109 23.2964 19.5821 23.598C19.9566 23.8963 20.4041 24.0455 20.9244 24.0455C21.342 24.0455 21.7133 23.9477 22.0381 23.7521C22.3662 23.5566 22.6231 23.2881 22.8087 22.9467C22.9976 22.602 23.092 22.2126 23.092 21.7784C23.092 21.3343 22.9943 20.9382 22.7987 20.5902C22.6065 20.2389 22.3413 19.9621 22.0033 19.7599C21.6652 19.5578 21.2791 19.455 20.8449 19.4517C20.5333 19.4484 20.2135 19.4964 19.8854 19.5959C19.5572 19.692 19.2871 19.8163 19.075 19.9688L17.9216 19.8295L18.5381 14.8182H23.8278V15.9119H19.5722L19.2142 18.9148H19.2739C19.4827 18.7491 19.7445 18.6115 20.0594 18.5021C20.3742 18.3928 20.7024 18.3381 21.0438 18.3381C21.6669 18.3381 22.222 18.4872 22.7092 18.7855C23.1998 19.0805 23.5842 19.4848 23.8626 19.9986C24.1444 20.5123 24.2852 21.099 24.2852 21.7585C24.2852 22.4081 24.1394 22.9882 23.8477 23.4986C23.5594 24.0057 23.1617 24.4067 22.6545 24.7017C22.1474 24.9934 21.5707 25.1392 20.9244 25.1392ZM27.2211 17.3636L29.0506 20.4858L30.8802 17.3636H32.2324L29.7665 21.1818L32.2324 25H30.8802L29.0506 22.0369L27.2211 25H25.8688L28.2949 21.1818L25.8688 17.3636H27.2211Z"
        fill="#6B7280"
      />
    </svg>,
    // eslint-disable-next-line react/jsx-key
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.63352 14.8182V25H6.40057V16.1108H6.34091L3.85511 17.7614V16.5085L6.40057 14.8182H7.63352ZM10.9012 25.0795C10.656 25.0795 10.4455 24.9917 10.2698 24.8161C10.0942 24.6404 10.0063 24.4299 10.0063 24.1847C10.0063 23.9394 10.0942 23.7289 10.2698 23.5533C10.4455 23.3776 10.656 23.2898 10.9012 23.2898C11.1465 23.2898 11.357 23.3776 11.5326 23.5533C11.7083 23.7289 11.7961 23.9394 11.7961 24.1847C11.7961 24.3471 11.7547 24.4962 11.6718 24.6321C11.5923 24.768 11.4846 24.8774 11.3487 24.9602C11.2161 25.0398 11.0669 25.0795 10.9012 25.0795ZM14.0608 25L18.6148 15.9915V15.9119H13.3648V14.8182H19.8875V15.9716L15.3534 25H14.0608ZM24.8518 25.1392C24.2684 25.1392 23.7431 25.0232 23.2758 24.7912C22.8084 24.5592 22.4339 24.241 22.1522 23.8366C21.8705 23.4323 21.7163 22.9716 21.6898 22.4545H22.883C22.9294 22.9152 23.1382 23.2964 23.5094 23.598C23.884 23.8963 24.3314 24.0455 24.8518 24.0455C25.2694 24.0455 25.6406 23.9477 25.9654 23.7521C26.2935 23.5566 26.5504 23.2881 26.736 22.9467C26.9249 22.602 27.0194 22.2126 27.0194 21.7784C27.0194 21.3343 26.9216 20.9382 26.7261 20.5902C26.5338 20.2389 26.2687 19.9621 25.9306 19.7599C25.5925 19.5578 25.2064 19.455 24.7722 19.4517C24.4607 19.4484 24.1408 19.4964 23.8127 19.5959C23.4846 19.692 23.2145 19.8163 23.0023 19.9688L21.8489 19.8295L22.4654 14.8182H27.7552V15.9119H23.4995L23.1415 18.9148H23.2012C23.41 18.7491 23.6718 18.6115 23.9867 18.5021C24.3016 18.3928 24.6297 18.3381 24.9711 18.3381C25.5942 18.3381 26.1493 18.4872 26.6366 18.7855C27.1271 19.0805 27.5116 19.4848 27.79 19.9986C28.0717 20.5123 28.2126 21.099 28.2126 21.7585C28.2126 22.4081 28.0667 22.9882 27.7751 23.4986C27.4867 24.0057 27.089 24.4067 26.5819 24.7017C26.0748 24.9934 25.4981 25.1392 24.8518 25.1392ZM31.1484 17.3636L32.978 20.4858L34.8075 17.3636H36.1598L33.6939 21.1818L36.1598 25H34.8075L32.978 22.0369L31.1484 25H29.7961L32.2223 21.1818L29.7961 17.3636H31.1484Z"
        fill="#6B7280"
      />
    </svg>,
    // eslint-disable-next-line react/jsx-key
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.554 25V24.1051L15.9148 20.4261C16.3092 19.9953 16.634 19.6207 16.8892 19.3026C17.1444 18.9811 17.3333 18.6795 17.456 18.3977C17.5819 18.1127 17.6449 17.8144 17.6449 17.5028C17.6449 17.1449 17.5587 16.835 17.3864 16.5732C17.2173 16.3113 16.9853 16.1091 16.6903 15.9666C16.3954 15.8241 16.0639 15.7528 15.696 15.7528C15.3049 15.7528 14.9635 15.834 14.6719 15.9964C14.3835 16.1555 14.1598 16.3793 14.0007 16.6676C13.8449 16.956 13.767 17.294 13.767 17.6818H12.5938C12.5938 17.0852 12.7313 16.5616 13.0064 16.1108C13.2815 15.66 13.656 15.3087 14.13 15.0568C14.6072 14.8049 15.1425 14.679 15.7358 14.679C16.3324 14.679 16.861 14.8049 17.3217 15.0568C17.7824 15.3087 18.1437 15.6484 18.4055 16.076C18.6674 16.5036 18.7983 16.9792 18.7983 17.5028C18.7983 17.8774 18.7304 18.2436 18.5945 18.6016C18.4619 18.9562 18.2299 19.3523 17.8984 19.7898C17.5703 20.224 17.1146 20.7543 16.5312 21.3807L14.2443 23.8267V23.9062H18.9773V25H12.554ZM21.9914 17.3636L23.821 20.4858L25.6505 17.3636H27.0028L24.5369 21.1818L27.0028 25H25.6505L23.821 22.0369L21.9914 25H20.6392L23.0653 21.1818L20.6392 17.3636H21.9914Z"
        fill="#6B7280"
      />
    </svg>,
    // eslint-disable-next-line react/jsx-key
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.42898 25.0795C3.18371 25.0795 2.97325 24.9917 2.79759 24.8161C2.62192 24.6404 2.53409 24.4299 2.53409 24.1847C2.53409 23.9394 2.62192 23.7289 2.79759 23.5533C2.97325 23.3776 3.18371 23.2898 3.42898 23.2898C3.67424 23.2898 3.88471 23.3776 4.06037 23.5533C4.23603 23.7289 4.32386 23.9394 4.32386 24.1847C4.32386 24.3471 4.28243 24.4962 4.19957 24.6321C4.12003 24.768 4.01231 24.8774 3.87642 24.9602C3.74384 25.0398 3.5947 25.0795 3.42898 25.0795ZM9.441 25.1392C8.69195 25.1392 8.05393 24.9354 7.52694 24.5277C6.99995 24.1167 6.59725 23.5218 6.31884 22.7429C6.04043 21.9607 5.90123 21.0161 5.90123 19.9091C5.90123 18.8087 6.04043 17.8691 6.31884 17.0902C6.60056 16.308 7.00492 15.7114 7.53191 15.3004C8.06221 14.8861 8.69858 14.679 9.441 14.679C10.1834 14.679 10.8181 14.8861 11.3451 15.3004C11.8754 15.7114 12.2798 16.308 12.5582 17.0902C12.8399 17.8691 12.9808 18.8087 12.9808 19.9091C12.9808 21.0161 12.8416 21.9607 12.5632 22.7429C12.2847 23.5218 11.8821 24.1167 11.3551 24.5277C10.8281 24.9354 10.1901 25.1392 9.441 25.1392ZM9.441 24.0455C10.1834 24.0455 10.7601 23.6875 11.1711 22.9716C11.5821 22.2557 11.7876 21.2348 11.7876 19.9091C11.7876 19.0275 11.6931 18.2768 11.5042 17.657C11.3186 17.0372 11.0501 16.5649 10.6988 16.2401C10.3508 15.9152 9.93153 15.7528 9.441 15.7528C8.7052 15.7528 8.13016 16.1158 7.71586 16.8416C7.30156 17.5642 7.09441 18.5866 7.09441 19.9091C7.09441 20.7907 7.18721 21.5398 7.37282 22.1562C7.55842 22.7727 7.82523 23.2417 8.17324 23.5632C8.52457 23.8847 8.94716 24.0455 9.441 24.0455ZM14.9807 25L19.5347 15.9915V15.9119H14.2847V14.8182H20.8074V15.9716L16.2733 25H14.9807ZM25.7717 25.1392C25.1884 25.1392 24.663 25.0232 24.1957 24.7912C23.7284 24.5592 23.3538 24.241 23.0721 23.8366C22.7904 23.4323 22.6363 22.9716 22.6098 22.4545H23.8029C23.8493 22.9152 24.0581 23.2964 24.4294 23.598C24.8039 23.8963 25.2513 24.0455 25.7717 24.0455C26.1893 24.0455 26.5605 23.9477 26.8853 23.7521C27.2134 23.5566 27.4703 23.2881 27.6559 22.9467C27.8448 22.602 27.9393 22.2126 27.9393 21.7784C27.9393 21.3343 27.8415 20.9382 27.646 20.5902C27.4537 20.2389 27.1886 19.9621 26.8505 19.7599C26.5125 19.5578 26.1263 19.455 25.6921 19.4517C25.3806 19.4484 25.0607 19.4964 24.7326 19.5959C24.4045 19.692 24.1344 19.8163 23.9223 19.9688L22.7688 19.8295L23.3853 14.8182H28.6751V15.9119H24.4194L24.0615 18.9148H24.1211C24.3299 18.7491 24.5918 18.6115 24.9066 18.5021C25.2215 18.3928 25.5496 18.3381 25.891 18.3381C26.5141 18.3381 27.0693 18.4872 27.5565 18.7855C28.047 19.0805 28.4315 19.4848 28.7099 19.9986C28.9916 20.5123 29.1325 21.099 29.1325 21.7585C29.1325 22.4081 28.9866 22.9882 28.695 23.4986C28.4066 24.0057 28.0089 24.4067 27.5018 24.7017C26.9947 24.9934 26.418 25.1392 25.7717 25.1392ZM32.0683 17.3636L33.8979 20.4858L35.7274 17.3636H37.0797L34.6138 21.1818L37.0797 25H35.7274L33.8979 22.0369L32.0683 25H30.7161L33.1422 21.1818L30.7161 17.3636H32.0683Z"
        fill="#6B7280"
      />
    </svg>
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentPlaybackImage, setCurrentPlaybackImage] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const CalculateTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secs = Math.floor(seconds % 60);
    const returnedSeconds = secs < 10 ? `0${secs}` : `${secs}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const CalculateTimeRemaining = () => {
    const timeleft = duration - currentTime;
    const seconds = timeleft % 60;
    const minutes = Math.floor(timeleft / 60) % 60;
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 15);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) + 15;
    changeRange();
  };

  const restartAudio = () => {
    progressBar.current.value = 0;
    changeRange();
  };

  const playBackSpeed = () => {
    if (audioPlayer.current.playbackRate == 2) {
      audioPlayer.current.playbackRate = 0.75;
      setCurrentPlaybackImage(currentPlaybackImage + 1);
    } else if (audioPlayer.current.playbackRate == 0.75) {
      audioPlayer.current.playbackRate += 0.25;
      setCurrentPlaybackImage(0);
    } else {
      audioPlayer.current.playbackRate += 0.25;
      setCurrentPlaybackImage(currentPlaybackImage + 1);
    }
  };

  return (
    <div className="flex justify-center py-10">
      <audio ref={audioPlayer} src={props.keyName}></audio>
      <div className="space-y-4">
        <div className="flex flex-col p-12 bg-slate-50 border rounded-lg space-y-4">
          <div className="flex flex-col space-x-2">
            {/* progress bar */}
            <div>
              <input
                type="range"
                className={styles.progressBar}
                defaultValue="0"
                ref={progressBar}
                onChange={changeRange}
              />
            </div>

            <div className="flex justify-between">
              {/* current time */}
              <div className="w-12">{CalculateTime(currentTime)}</div>
              {/* duration */}
              <div className="w-12">{CalculateTimeRemaining()}</div>
            </div>
          </div>

          {/* controls */}
          <div className="flex space-x-4">
            <button onClick={restartAudio}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.7322 11.1875C26.4979 11.0577 26.2332 10.9929 25.9654 11C25.6977 11.0071 25.4368 11.0858 25.2097 11.2278L14 18.2403V11.75C14 11.5511 13.921 11.3603 13.7803 11.2197C13.6397 11.079 13.4489 11 13.25 11C13.0511 11 12.8603 11.079 12.7197 11.2197C12.579 11.3603 12.5 11.5511 12.5 11.75V28.25C12.5 28.4489 12.579 28.6397 12.7197 28.7803C12.8603 28.921 13.0511 29 13.25 29C13.4489 29 13.6397 28.921 13.7803 28.7803C13.921 28.6397 14 28.4489 14 28.25V21.7597L25.2097 28.7703C25.4354 28.912 25.695 28.9908 25.9614 28.9985C26.2278 29.0063 26.4915 28.9426 26.7251 28.8142C26.9586 28.6858 27.1536 28.4973 27.2899 28.2682C27.4261 28.0391 27.4987 27.7778 27.5 27.5112V12.4887C27.5 12.223 27.4287 11.9622 27.2937 11.7333C27.1587 11.5045 26.9648 11.316 26.7322 11.1875ZM26 27.5L14.015 20L26 12.5066V27.5Z"
                  fill="#6B7280"
                />
              </svg>
            </button>
            <button onClick={backThirty}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4844 17.3484H10.9844V12.8484"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.1664 25.8336C15.3202 26.9874 16.7902 27.7732 18.3905 28.0915C19.9908 28.4098 21.6496 28.2464 23.1571 27.622C24.6646 26.9976 25.9531 25.9402 26.8596 24.5835C27.7661 23.2268 28.25 21.6317 28.25 20C28.25 18.3683 27.7661 16.7733 26.8596 15.4165C25.9531 14.0598 24.6646 13.0024 23.1571 12.378C21.6496 11.7536 19.9908 11.5902 18.3905 11.9085C16.7902 12.2269 15.3202 13.0126 14.1664 14.1664L10.9844 17.3484"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.1992 23.1066C18.1992 23.5636 17.9268 23.8537 17.4961 23.8537C17.0742 23.8537 16.8018 23.5636 16.8018 23.1066V18.5011H16.793L16.125 19.0724C15.9492 19.2658 15.8174 19.3185 15.5977 19.3185C15.2637 19.3185 15 19.0461 15 18.7033C15 18.4484 15.1143 18.255 15.3691 18.0353L16.4502 17.2267C16.8105 16.9367 17.0566 16.84 17.3643 16.84C17.874 16.84 18.1992 17.1476 18.1992 17.7365V23.1066Z"
                  fill="#6B7280"
                />
                <path
                  d="M24.334 21.4806C24.334 22.966 23.3584 23.924 21.8643 23.924C20.7744 23.924 19.9922 23.3087 19.7549 22.7199C19.6846 22.5793 19.667 22.4474 19.667 22.3156C19.667 21.9552 19.9131 21.7003 20.2646 21.7003C20.5283 21.7003 20.6865 21.8234 20.8184 22.0255C21.0469 22.4123 21.416 22.6935 21.8994 22.6935C22.5322 22.6935 22.9893 22.1925 22.9893 21.5246C22.9893 20.8654 22.6025 20.4084 21.9785 20.4084C21.6445 20.4084 21.3984 20.5402 21.1084 20.7863C20.8887 20.9621 20.7656 21.0412 20.4141 21.0412C19.9658 21.0412 19.6934 20.7687 19.7285 20.2765L19.8955 17.7892C19.9307 17.2355 20.2207 16.9279 20.7217 16.9279H23.5078C23.8594 16.9279 24.1143 17.1652 24.1143 17.5343C24.1143 17.9035 23.8594 18.1584 23.5078 18.1584H21.0645L20.9326 19.9689C21.1787 19.547 21.7236 19.2834 22.2773 19.2834C23.4375 19.2834 24.334 20.1535 24.334 21.4806Z"
                  fill="#6B7280"
                />
              </svg>
            </button>
            <button onClick={togglePlayPause}>
              {isPlaying ? (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.75 11H23C22.6022 11 22.2206 11.158 21.9393 11.4393C21.658 11.7206 21.5 12.1022 21.5 12.5V27.5C21.5 27.8978 21.658 28.2794 21.9393 28.5607C22.2206 28.842 22.6022 29 23 29H26.75C27.1478 29 27.5294 28.842 27.8107 28.5607C28.092 28.2794 28.25 27.8978 28.25 27.5V12.5C28.25 12.1022 28.092 11.7206 27.8107 11.4393C27.5294 11.158 27.1478 11 26.75 11ZM26.75 27.5H23V12.5H26.75V27.5ZM17 11H13.25C12.8522 11 12.4706 11.158 12.1893 11.4393C11.908 11.7206 11.75 12.1022 11.75 12.5V27.5C11.75 27.8978 11.908 28.2794 12.1893 28.5607C12.4706 28.842 12.8522 29 13.25 29H17C17.3978 29 17.7794 28.842 18.0607 28.5607C18.342 28.2794 18.5 27.8978 18.5 27.5V12.5C18.5 12.1022 18.342 11.7206 18.0607 11.4393C17.7794 11.158 17.3978 11 17 11ZM17 27.5H13.25V12.5H17V27.5Z"
                    fill="#6B7280"
                  />
                </svg>
              ) : (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.7793 18.7197L16.2822 10.4712C16.0549 10.3322 15.7946 10.2562 15.5282 10.2512C15.2617 10.2461 14.9988 10.3122 14.7663 10.4425C14.5339 10.5728 14.3404 10.7627 14.2057 10.9926C14.071 11.2226 14 11.4842 14 11.7507V28.2493C14.0002 28.5157 14.0714 28.7772 14.2061 29.007C14.3408 29.2368 14.5343 29.4266 14.7667 29.5569C14.9991 29.6871 15.2619 29.7532 15.5283 29.7483C15.7946 29.7433 16.0548 29.6676 16.2822 29.5288L29.7793 21.2803C29.9986 21.1462 30.1797 20.958 30.3054 20.7339C30.4311 20.5097 30.4971 20.257 30.4971 20C30.4971 19.743 30.4311 19.4903 30.3054 19.2661C30.1797 19.0419 29.9986 18.8538 29.7793 18.7197Z"
                    fill="#0075B4"
                  />
                </svg>
              )}
            </button>
            <button onClick={forwardThirty}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.5156 17.3484H29.0156V12.8484"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.8336 25.8336C24.6798 26.9874 23.2098 27.7732 21.6095 28.0915C20.0092 28.4098 18.3504 28.2464 16.8429 27.622C15.3354 26.9976 14.0469 25.9402 13.1404 24.5835C12.2339 23.2268 11.75 21.6317 11.75 20C11.75 18.3683 12.2339 16.7733 13.1404 15.4165C14.0469 14.0598 15.3354 13.0024 16.8429 12.378C18.3504 11.7536 20.0092 11.5902 21.6095 11.9085C23.2098 12.2269 24.6798 13.0126 25.8336 14.1664L29.0156 17.3484"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.1992 23.1066C18.1992 23.5636 17.9268 23.8536 17.4961 23.8536C17.0742 23.8536 16.8018 23.5636 16.8018 23.1066V18.5011H16.793L16.125 19.0724C15.9492 19.2657 15.8174 19.3185 15.5977 19.3185C15.2637 19.3185 15 19.046 15 18.7032C15 18.4484 15.1143 18.255 15.3691 18.0353L16.4502 17.2267C16.8105 16.9366 17.0566 16.84 17.3643 16.84C17.874 16.84 18.1992 17.1476 18.1992 17.7365V23.1066Z"
                  fill="#6B7280"
                />
                <path
                  d="M24.334 21.4806C24.334 22.9659 23.3584 23.924 21.8643 23.924C20.7744 23.924 19.9922 23.3087 19.7549 22.7198C19.6846 22.5792 19.667 22.4474 19.667 22.3156C19.667 21.9552 19.9131 21.7003 20.2646 21.7003C20.5283 21.7003 20.6865 21.8234 20.8184 22.0255C21.0469 22.4122 21.416 22.6935 21.8994 22.6935C22.5322 22.6935 22.9893 22.1925 22.9893 21.5245C22.9893 20.8654 22.6025 20.4083 21.9785 20.4083C21.6445 20.4083 21.3984 20.5402 21.1084 20.7863C20.8887 20.962 20.7656 21.0411 20.4141 21.0411C19.9658 21.0411 19.6934 20.7687 19.7285 20.2765L19.8955 17.7892C19.9307 17.2355 20.2207 16.9279 20.7217 16.9279H23.5078C23.8594 16.9279 24.1143 17.1652 24.1143 17.5343C24.1143 17.9034 23.8594 18.1583 23.5078 18.1583H21.0645L20.9326 19.9689C21.1787 19.547 21.7236 19.2833 22.2773 19.2833C23.4375 19.2833 24.334 20.1534 24.334 21.4806Z"
                  fill="#6B7280"
                />
              </svg>
            </button>
            <button onClick={playBackSpeed}>{playbackSpeedButtons[currentPlaybackImage]}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TopicAudioPlayer({ keyName }: { keyName: string }) {
  const [path, setPath] = useState<string | null>(null);

  useEffect(() => {
    fetch('/learn/audio?key=' + keyName)
      .then(res => res.json())
      .then(result => {
        setPath(result.path);
      });
  }, [keyName]);

  if (path) {
    return <AudioPlayer keyName={path} />;
  }

  return null;
}
