import { useState } from 'react';
import { leadApi } from '../api/api';

export const useLeadForm = (type = 'callback') => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const submitForm = async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      let response;
      switch (type) {
        case 'callback':
          response = await leadApi.submitCallback(data);
          break;
        case 'appointment':
          response = await leadApi.submitAppointment(data);
          break;
        case 'contact':
          response = await leadApi.submitContact(data);
          break;
        case 'insurance':
          response = await leadApi.submitInsuranceInquiry(data);
          break;
        default:
          throw new Error('Invalid form type');
      }

      setSuccess(true);
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Something went wrong';
      setError(errorMessage);
      return { error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setLoading(false);
    setSuccess(false);
    setError(null);
  };

  return { submitForm, loading, success, error, reset };
};
