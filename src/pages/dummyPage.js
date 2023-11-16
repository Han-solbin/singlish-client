/* eslint-disable no-console */
import React, { useCallback, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { COLOR, PATH } from "../constants";
import { Navigationheader } from "../molecules/navigation";
import { Body3, Specialtitle1, Specialtitle2 } from "../atoms/text";
import { useAxiosGet } from "../hooks/queries";
import { Bottomonebuttoncontainer } from "../molecules/buttoncontainer";
import { Soundwaveicon, Microphoneicon } from "../resources/icon";

const PracticeDetailPage = () => {
  const audioObject = useRef(HTMLAudioElement);
  const [play, setPlay] = React.useState(false);

  const soundStart = () => {
    if (audioObject.current) {
      setPlay(true);
      audioObject.current.play();
      console.log(audioObject.ended);
    }
  };
  const soundEnd = () => {
    setPlay(false);
  };

  /**
 *   const soundStart = () => {
    if (audioObject.current) {
      setPlay(true);
      audioObject.current.play();
      console.log(audioObject.ended);
    }
  };
  const soundEnd = () => {
    setPlay(false);
  };

 * 
 * 
 * 
 * 
 *   const onSubmitAudioFile = useCallback(() => {
    if (audioUrl) {
      const audio = new Audio(URL.createObjectURL(audioUrl));
      audio.play();
    }
    
  }, [audioUrl]);
 */

  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [onRec, setOnRec] = useState(true);
  const [source, setSource] = useState();
  const [analysed, setAnalysed] = useState();
  const [audioUrl, setAudioUrl] = useState();

  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [isRecording, setIsRecording] = React.useState(false);
  const [voice, setVoice] = React.useState("⋯");

  /* 사용 중지된 코드
  const recordStart = () => {
    setIsRecording(true);
    console.log(isRecording);
    
    const { loading: loading, data: result, error: error } = useAxiosGet({
      url: `https://speech.googleapis.com/v1p1beta1/speech:recognize`,
    });
    
    while (!voice) {
      console.log("prosessing...");
    }
    //setVoice(result);
    setIsDisabled(false);
    setIsRecording(false);
  };
*/

  const recordStart = () => {
    setIsRecording(true);
    // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
    const analyser = audioCtx.createAnalyser();
    setAnalysed(analyser);

    // 마이크 사용 권한 획득 후 녹음 시작
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      console.log(mediaRecorder);
      mediaRecorder.start();
      setStream(stream);

      setMedia(mediaRecorder);
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
      // 음성 녹음이 시작됐을 때 onRec state값을 false로 변경
      analyser.onaudioprocess = function(e) {
        setOnRec(false);
      };
    });
  };

  const recordEnd = () => {
    // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
    media.ondataavailable = function(e) {
      setAudioUrl(e.data);
      const audioBlob = e.data;
      setOnRec(true);
      console.log(audioUrl);
      const formData = new FormData();
      formData.append("audio", audioBlob, "recorded_audio.wav");
      console.log(audioBlob);
      console.log(formData);
    };
    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    stream.getAudioTracks().forEach(function(track) {
      track.stop();
    });
    // 미디어 캡처 중지
    media.stop();
    // 메서드가 호출 된 노드 연결 해제
    analysed.disconnect();
    source.disconnect();
    console.log(audioUrl);
    /*
    const { loading: loading, data: result, error: error } = useAxiosGet(
      `https://speech.googleapis.com/v1p1beta1/speech:recognize`
    );
    setVoice(result);
    */
    setIsDisabled(false);
    setIsRecording(false);
    console.log(audioUrl);
  };

  const onSubmitAudioFile = useCallback(() => {
    if (audioUrl) {
      console.log(URL.createObjectURL(audioUrl)); // 출력된 링크에서 녹음된 오디오 확인 가능
    }
    // File 생성자를 사용해 파일로 변환
    const sound = new File([audioUrl], "soundBlob", {
      lastModified: new Date().getTime(),
      type: "audio",
    });
    console.log(sound); // File 정보 출력
  }, [audioUrl]);

  const { wordId } = useParams();
  const { loading: loading_1, data: word, error: error_1 } = useAxiosGet(
    `http://localhost:8081/api/v1/words/${wordId}`
  );
  if (loading_1) {
    console.log("loading...");
  }
  if (error_1) {
    console.log("error!");
  }
  const { loading: loading_2, data: course, error: error_2 } = useAxiosGet(
    `http://localhost:8081/api/v1/courses/${Math.floor(wordId / 6)}`
  );
  if (loading_2) {
    console.log("loading...");
  }
  if (error_2) {
    console.log("error!");
  }
  const { loading: loading_3, data: user, error: error_3 } = useAxiosGet(
    `http://localhost:8081/api/v1/users/0`
  );
  if (loading_3) {
    console.log("loading...");
  }
  if (error_3) {
    console.log("error!");
  }
  const handleClick = () => {
    if (wordId % 6 != 5) {
      navigate(`${PATH.PRACTICEDETAIL}/${wordId + 1}`);
    } else {
      navigate(`${PATH.PRACTICE}`);
    }
  };
  if (word && course && user)
    return (
      <Container>
        <Navigationheader>{course.title}</Navigationheader>
        <SignContainer>
          <ImageContainer
            src={
              "https://github.com/Han-solbin/singlish-server/assets/123459400/0f061a46-8161-442b-b469-105d11b7d33a"
            }
          ></ImageContainer>
        </SignContainer>
        <WordContainer>
          <Specialtitle1 margin={0} color={COLOR.WHITE}>
            {word.engWord}
          </Specialtitle1>
          <Specialtitle2 margin={0} color={COLOR.WHITE}>
            {word.korWord}
          </Specialtitle2>
          <Specialtitle2
            margin={"-0.25rem 0rem 0rem 0rem"}
            color={COLOR.GRAY300}
          >
            {word.diacritic}
          </Specialtitle2>
          <PlayButton play={play} onClick={soundStart} onEnded={soundEnd}>
            <audio ref={audioObject} src={word.audioUrl}></audio>
            <Soundwaveicon
              size={"48px"}
              color={play ? COLOR.GRAY900 : COLOR.BRANDCOLOR}
            ></Soundwaveicon>
          </PlayButton>
        </WordContainer>
        <DiacriticContainer>
          <Body3 margin={0} color={COLOR.GRAY300}>
            {isRecording ? "듣고있어요..." : "솔빈님의 발음은..."}
          </Body3>
          <Specialtitle1 margin={0} color={COLOR.WHITE}>
            {voice}
          </Specialtitle1>
          <RecordButton
            onClick={isRecording ? recordEnd : recordStart}
            isRecording={isRecording}
          >
            <Microphoneicon
              size={"44px"}
              color={isRecording ? COLOR.GRAY900 : COLOR.BRANDCOLOR}
            ></Microphoneicon>
          </RecordButton>
          <RecordButton onClick={onSubmitAudioFile} isRecording={isRecording}>
            <Microphoneicon
              size={"44px"}
              color={isRecording ? COLOR.GRAY900 : COLOR.BRANDCOLOR}
            ></Microphoneicon>
          </RecordButton>
        </DiacriticContainer>
        <Bottomonebuttoncontainer
          disabled={isDisabled}
          content={"동의합니다"}
          onClick={handleClick}
        ></Bottomonebuttoncontainer>
      </Container>
    );
};
export default PracticeDetailPage;

const PlayButton = styled.button`
  display: flex;
  flex-direction: row;
  background-color: ${(props) =>
    props.play ? COLOR.BRANDCOLOR : COLOR.GRAY900};
  padding: 0.25rem 1rem;
  border-radius: 1.25rem;
  border: none;
`;

const RecordButton = styled.button`
  display: flex;
  flex-direction: row;
  background-color: ${(props) =>
    props.isRecording ? COLOR.BRANDCOLOR : COLOR.GRAY900};
  padding: 0.375rem 1.125rem;
  border-radius: 1.25rem;
  border: none;
`;

const WordContainer = styled.div`
  display: flex;
  height: 240px;
  flex-direction: column;
  width: auto;
  margin: 0rem 1rem 1rem 1rem;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLOR.GRAY700};
  border-radius: 1.25rem;
`;

const DiacriticContainer = styled.div`
  display: flex;
  height: 160px;
  flex-direction: column;
  width: auto;
  margin: 0rem 1rem;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLOR.GRAY700};
  border-radius: 1.25rem;
`;

const ImageContainer = styled.img`
  width: 240px;
  height: auto;
  object-fit: contain;
`;

const SignContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  padding: auto;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
`;
