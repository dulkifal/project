import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getData, patchData } from "../../../lib/baseApi";
import s from "../../../styles/admin/article.module.css";


const EditArticle = () => {

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
      console.log(data);
      setArticle(data);
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

    
 
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg my-8 rtl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-right">
        تحرير المقال {id}
      </h2>
      
      <div className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-2 text-right text-gray-700 font-medium">
            عنوان
          </label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={article?.title}
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="content" className="mb-2 text-right text-gray-700 font-medium">
            محتوا
          </label>
          <textarea
            name="content"
            id="content"
            rows="10"
            defaultValue={article?.content}
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-vertical"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="author" className="mb-2 text-right text-gray-700 font-medium">
            الكاتب
          </label>
          <input
            type="text"
            name="author"
            id="author"
            defaultValue={article?.author}
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lang" className="mb-2 text-right text-gray-700 font-medium">
            اختر لغة
          </label>
          <select
            onChange={(e) => changeLang(e.target.value)}
            id="lang"
            defaultValue={article?.lang}
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
          >
            <option value="ar">عربية</option>
            <option value="ur">اردو</option>
          </select>
        </div>

        <div className="flex items-center justify-end space-x-2">
          <label htmlFor="publish" className="text-gray-700 font-medium ml-2">
            نشر
          </label>
          <input
            type="checkbox"
            name="publish"
            id="publish"
            checked={article?.published}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        </div>
      </div>

      <button
        onClick={() => submit(article.id)}
        className="w-full mt-8 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        تم تحريره
      </button>
    </div>
  );
};


export default EditArticle;