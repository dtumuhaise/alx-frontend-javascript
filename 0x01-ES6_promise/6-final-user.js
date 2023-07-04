import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((data) => {
      const arr = [];
      data.forEach((item) => {
        if (item.status === 'fulfilled') {
          arr.push({
            status: item.status,
            value: item.value,
          });
        } else {
          arr.push({
            status: item.status,
            reason: item.reason.message,
          });
        }
      });
      return arr;
    });
}
