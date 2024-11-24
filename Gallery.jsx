const Tour = ({ id, image, info, name, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
}

const Tours = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tours, setTours] = useState([]);
  
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchTours();
    }, []);
  
    const removeTour = (id) => {
      setTours(tours.filter(tour => tour.id !== id));
    };
    }