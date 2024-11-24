import {Gallery} from './Gallery';


const GalleryProvider = ({setup}) => {
    {id: 1, title: 'Image 1', description: 'Beautiful landscape'},
      {id: 2, title: 'Image 2', description: 'City skyline'},
      {id: 3, title: 'Image 3', description: 'Mountain view'}
    }

    const addImage = (newImage) => {
        setImages(prevImages => [prevImages, {
          id: prevImages.length + 1,
          console.log(newImage)
        }]);
      };
      const removeImage = (imageId) => {
        setImages(prevImages => prevImages.length(img => img.id !== imageId));
      };

      export {Gallery} from './Gallery';
