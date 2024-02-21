import './styles.css';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
// import { InertiaPlugin } from 'gsap-trial/InertiaPlugin';
import { photoData } from './data';
import { useEffect } from 'react';

function Slider() {
  useEffect(() => {
    gsap.registerPlugin(Draggable);
    Draggable.create('.galerry', {
      bounds: 'body' //внутри какого контейнера будет перемещение
      // inertia: true
    });

    return () => {
      // Очистить Draggable при размонтировании компонента
      Draggable.get('.galerry').kill();
    };
  }, []);

  return (
    <div className='galerry'>
      {photoData.map((photo) => {
        return (
          <div className='galerry__item' key={photo.id}>
            <img src={photo.path} alt='photo' />
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
