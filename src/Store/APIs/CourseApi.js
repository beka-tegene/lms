import axios from "axios";
import { toast } from "react-toastify";
function encrypt(text) {
  return btoa(text);
}
export const getAllCourse = async () => {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.get("http://localhost:4500/api/v1/course", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    toast.error(error.response.data.error);
  }
};

export const setCourseEnroll = async (data) => {
  console.log(data);
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.post(
      `http://localhost:4500/api/v1/users/${data.decryptedId}/enroll`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    toast.success(response.data.message);
    setTimeout(() => {
      window.location.href = `/lesson/${encrypt(data.decryptedId)}`;
    }, 2000);
  } catch (error) {
    toast.error(error.response.data.error);
  }
};

export const setPayment = async (data) => {
  try {
    axios.defaults.withCredentials = true;
    const chapaPayUrl = "http://localhost:4500/payment/chapa/pay";
    const body = {
      lesson_id: data.slug,
      user_id: data.userId
    }
    axios
      .post(chapaPayUrl,body)
      .then((data) => {
        toast.success("Redirecting to chapa checkout page");
        setTimeout(() => {
          window.location.href = data.data.data.checkout_url;
        }, 2000);
      })
      .catch((error) => {
        console.log({ error });
        toast.error("Error while making a payment with chapa");
      });
  } catch (error) {
    toast.error(error.response.data.error);
  }
};

export const setPaymentSantim = async () => {
  try {
    axios.defaults.withCredentials = true;
    const santimPayUrl = "http://localhost:4500payment/santim-pay/pay";
    const body = {
      reason: "Paying to course that this",
      total: 1,
      order_id: 1,
    };
    axios
      .post(santimPayUrl, body)
      .then((data) => {
        toast.success("Redirecting to santim-pay checkout page");
        setTimeout(() => {
          window.location.href = data.data.response.url;
        }, 2000);
      })
      .catch((error) => {
        console.log({ error });
        toast.error("Error while making a payment with santim pay");
      });
  } catch (error) {
    toast.error(error.response.data.error);
  }
};

export const updateLessonProgress = async (data) => {
  try {
    axios.defaults.withCredentials = true;
    await axios.put(
      `http://localhost:4500/api/v1/users/updatelessonprogress`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    toast.error(error.response.data.error);
  }
};
