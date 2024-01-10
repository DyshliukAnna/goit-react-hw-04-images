import { useState, useEffect} from 'react';


import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Searchbar from "./Searchbar/Searchbar";

import fetchPhotos from 'components/API/API';


 const App = ()=> {
  const[searchQuery, setSearchQuery] = useState('');
  const[data, setData] = useState([]);
  const[page, setPage] = useState(1);
  const[error, setError] = useState('');
  const[status, setStatus] = useState('idle');
  const [showBtn, setShowBtn] = useState(false);

  console.log(error);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery) {
        return;
      }
      try {
        setStatus('pending');
        const { totalHits, hits } = await fetchPhotos(searchQuery, page);
        setData(prevData => [...prevData, ...hits]);
        setShowBtn(page < Math.ceil(totalHits / 12));
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
        console.log(error.message);
      }
    };
    fetchData();
  }, [searchQuery, page]);
  return (
    <>
    <Searchbar onSubmit={this.handleSearchSubmit} />
     <div className="container">
      <ImageGallery dataImages={data} />
          {showBtn && <Button onClick={this.incrementPage} />}
          {status === 'pending' && <Loader />}
          {status === 'rejected' && (
            <div className="info">
              За вашим запитом нічого не знайдено
            </div>
          )}
     </div>
    </>
  );
};



 export default App;



  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (searchQuery !== prevState.searchQuery || prevState.page !== page) {
      try {
        this.setState({ status: 'pending' });
        const { totalHits, hits } = await fetchPhotos(searchQuery, page);
        this.setState(prevState => ({
          data: [...prevState.data, ...hits],
          showBtn: page < Math.ceil(totalHits / 12),
          status: 'resolved',
        }));
      } catch (error) {
        this.setState({
          error,
          status: 'rejected',
        });
        console.log(error.message);
      }
    }
  }


  incrementPage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  handleSearchSubmit = searchQuery => {
    this.setState({
      searchQuery,
      page: 1,
      data: [],
      showBtn: false,
    });
  };


  render(){
    const { data, status, showBtn } = this.state;
 
