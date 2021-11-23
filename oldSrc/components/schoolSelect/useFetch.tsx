import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url: string = '', deps: any) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((result) => {
      setData(result.data);
      setLoading(false);
    });
  }, [deps]);

  return [data, loading];
};

export default useFetch;
