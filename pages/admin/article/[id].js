import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getData, patchData } from "../../../lib/baseApi";
import s from "../../../styles/admin/article.module.css";


const EditAricle = () => {

  const [article, setArticle] = useState({
    title: "",
    content: "",
  });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetchArticle();
  }, [id]);
 


  const fetchArticle = () => {
    getData(`/api/article/${id}`).then((data) => {
      setArticle(data[0]);
    });
  };

  const submit = (id) => {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const author = document.getElementById("author").value;
    const lang = document.getElementById('lang').value ? document.getElementById('lang').value : 'ar';
    const published = document.getElementById('publish').checked ? 'true' : 'false';

    const data = {
      id,
      title,
      content,
      author,
      lang,
      published,
    };
    patchData(`/api/article`, data).then((data) => {
      // router.push("/admin/article");
    });
  };

    
 
  return <div className={s.editArticle}>
    <h2> تحرير المقال {id}</h2> 
    <div className={s.editingArea}>
      <label htmlFor="title">عنوان</label>
      <input type="text" name="title" id="title" defaultValue={article.title} />
      <label htmlFor="content">محتوا</label>
      <textarea name="content" id="content" cols="30" rows="10" defaultValue={article.content}></textarea>
      <label htmlFor="author">الكاتب</label>
      <input type="text" name="author" id="author" defaultValue={article.author} />
      {/* dropdown for select language */}
            <label htmlFor="lang"> اختر لغة</label>
            <select onChange={(e)=> changeLang(e.target.value)} id={'lang'} defaultValue={article.lang} >
              <option value="ar">عربية</option>
              <option value="ur">اردو</option>

            </select>
            {/* checkbox for publish */}
            <div> 
              
            <label htmlFor="lang">    نشر</label>
            <input type="checkbox" name="publish" id="publish" checked={article.published} />
            </div>

  

     
    </div>
    <button data-theme="add" onClick={()=>{submit(article.id)}}>تم تحريره</button>
  
  </div>;
}
//


export default EditAricle;