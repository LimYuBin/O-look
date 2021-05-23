// 사용자 등록 시
document.getElementById('user-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const user_gender = e.target.user_gender.value;
  const job_title = e.target.job_title.value;
  const user_age = e.target.user_age.value;
  const user_height = e.target.user_height.value;
  const user_weight = e.target.user_weight.value;
  if (!user_gender) {
    return alert('성별을 입력하세요');
  }
  if (!job_title) {
    return alert('직업을 선택하세요');
  }
  if (!user_age) {
    return alert('나이를 입력하세요');
  }
  if (!user_height) {
    return alert('키를 입력하세요');
  }
  if (!user_weight) {
    return alert('몸무게를 입력하세요');
  }
  try {
    await axios.post('/users', { user_gender, job_title, user_age, user_height, user_weight });
    getUser();
  } catch (err) {
    console.error(err);
  }
  e.target.user_gender.value = '';
  e.target.user_job.value = '';
  e.target.user_age.value = '';
  e.target.user_height.value = '';
  e.target.user_weight.value = '';
});