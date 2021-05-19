// 사용자 등록 시
document.getElementById('user-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const gender = e.target.gender.value;
  const job = e.target.job.value;
  const age = e.target.age.value;
  const height = e.target.height.value;
  const weight = e.target.weight.value;
  if (!gender) {
    return alert('성별을 입력하세요');
  }
  if (!age) {
    return alert('나이를 입력하세요');
  }
  if (!height) {
    return alert('키를 입력하세요');
  }
  if (!weight) {
    return alert('몸무게를 입력하세요');
  }
  try {
    await axios.post('/users', { gender, job, age, height, weight });
    getUser();
  } catch (err) {
    console.error(err);
  }
  e.target.gender.value = '';
  e.target.job.value = '';
  e.target.age.value = '';
  e.target.height.value = '';
  e.target.weight.value = '';
});