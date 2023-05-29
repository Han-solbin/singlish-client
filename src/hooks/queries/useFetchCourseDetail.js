import { useState, useEffect } from "react";

function useFetchCourseDetail(courseId) {
  const [loading, setLoading] = useState(true);
  const [courseDetail, setCourseDetail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    window
      .fetch(`http://localhost:8081/api/v1/courses/${courseId}`)
      .then((res) => res.json())
      .then((courseDetail) => {
        setCourseDetail(courseDetail);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [courseId]);

  return { loading, courseDetail, error };
}

export default useFetchCourseDetail;
