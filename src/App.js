import React from "react";
import styled from "styled-components";

import { PATH } from "./constants";
import { Routes, Route } from "react-router-dom";
import { getMaxWidth } from "./utils/width";

import {
  MainPage,
  WelcomePage,
  WelcomeTermPage,
  WelcomeTermDetailPage,
  CoursesPage,
  CoursesDetailPage,
  CoursesSuccessPage,
  SearchPage,
  PracticePage,
  PracticeDetailPage,
  PracticeSuccessPage,
  ChatbotPage,
  ChatbotDetailPage,
  AccountPage,
} from "./pages";

import "./App.css";

function App() {
  return (
    <Container maxWidth={getMaxWidth()}>
      <Routes>
        <Route path={`${PATH.MAIN}`} element={<MainPage />} />
        <Route path={`${PATH.WELCOME}`} element={<WelcomePage />} />
        <Route path={`${PATH.WELCOMETERM}`} element={<WelcomeTermPage />} />
        <Route
          path={`${PATH.WELCOMETERMDETAIL}/:termId`}
          element={<WelcomeTermDetailPage />}
        />
        <Route path={`${PATH.COURSES}/:categoryId`} element={<CoursesPage />} />
        <Route
          path={`${PATH.COURSESDETAIL}/:courseId`}
          element={<CoursesDetailPage />}
        />
        <Route
          path={`${PATH.COURSESSUCCESS}`}
          element={<CoursesSuccessPage />}
        />
        <Route path={`${PATH.SEARCH}/:keyword`} element={<SearchPage />} />
        <Route path={`${PATH.PRACTICE}/:userId`} element={<PracticePage />} />
        <Route
          path={`${PATH.PRACTICEDETAIL}/:wordId`}
          element={<PracticeDetailPage />}
        />
        <Route
          path={`${PATH.PRACTICESUCCESS}`}
          element={<PracticeSuccessPage />}
        />
        <Route path={`${PATH.CHATBOT}`} element={<ChatbotPage />} />
        <Route
          path={`${PATH.CHATBOTDETAIL}/:chatbotId`}
          element={<ChatbotDetailPage />}
        />
        <Route path={`${PATH.ACCOUNT}/:userId`} element={<AccountPage />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  max-width: ${(props) => props.maxWidth};
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;
export default App;
