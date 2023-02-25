import s from "./comp.module.css";

const Skeleton = ( {count}) => {
  

  return (
    // return number of skeleton cards from count
   
    <div className={s.blogs}>
      {Array(count)
        .fill()
        .map((_, i) => (
          <div key={i} className={s.card}>
            <div className={s.skeleton}></div>
            <div className={s.skeletonTitle}></div>
            <div className={s.skeletonDescription}></div>
          </div>
        ))}
    </div>
    
  
  );
};

export default Skeleton;