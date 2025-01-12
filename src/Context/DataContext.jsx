import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";

export const DataContext = createContext();

const DataProvider = ({ children, apiUrl }) => {
  const { auth } = useContext(AuthContext); // استخدام التوكن من AuthContext
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // تعيين loading إلى false بشكل افتراضي
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (apiUrl) => {
      setLoading(true); // تعيين loading إلى true عند بدء التحميل
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${auth.token}`, // استخدام التوكن من Context
          },
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    },
    [auth.token]
  ); // يجب إعادة تعريف الدالة فقط عندما يتغير التوكن

  useEffect(() => {
    if (auth.token && apiUrl) {
      fetchData(apiUrl); // إرسال apiUrl كـ parameter إلى الدالة
    }
  }, [auth.token, apiUrl, fetchData]); // إضافة apiUrl كمصفوفة تبعيات

  return (
    <DataContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
  apiUrl: PropTypes.string.isRequired, // تأكيد أن apiUrl هو string مطلوب
};

export default DataProvider;
