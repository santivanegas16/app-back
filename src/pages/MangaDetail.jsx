import reactions from "/img/reactions.svg"
import raiting from "/img/raiting.svg"
import comment from "/img/icon_comment.svg"
import { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../apiUrl';
import { useParams } from 'react-router-dom';
import Category from '../components/Category_mangas';
import Switch_manga_chapters from '../components/Switch_manga_chapters';
import { Link as Anchor } from 'react-router-dom';

export default function MangaDetail() {

  const { manga_id, page } = useParams()


  const [Manga, setManga] = useState([])
  const [Chapters, setChapters] = useState([])
  const [toggle, setToggle] = useState(true)

  useEffect(
    () => {
      let headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` } }
      axios(apiUrl + "mangas/" + manga_id, headers)
        .then(res => {
          setManga(res.data.response.manga)
        })
        .catch(err => console.log(err))
    }, []
  )

  useEffect(
    () => {
      let headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` } }
      axios(apiUrl + "chapters/?manga_id=" + manga_id + "&page=" + page, headers)
        .then(res => {
          setChapters(res.data.response.chapters)
          console.log(res)
        })
        .catch(err => console.log(err))
    }, []
  )

  return (
    <main>
      <div className="min-h-screen w-full pt-[100px] bg-[#EBEBEB] pb-[30px] flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className='px-5 md:flex md:flex-col md:items-center'>
            <img className="h-[352px] object-contain" src={Manga?.cover_photo} />
            {toggle ?
              <h1 className="max-[350px]:text-[30px] text-[40px] font-normal w-min md:w-full font-poppins text-justify sm:text-center leading-none pt-2">{Manga.title}</h1>
              :
              <h1 className="max-[350px]:text-[20px] text-[20px] font-normal w-min md:w-full font-poppins text-justify sm:text-center leading-none pt-2">Chapters</h1>
            }
          </div>
          {toggle ?
            <div>
              <div className='flex justify-between pt-2 px-5'>
                <Category key={Manga.category_id?.name} name={Manga.category_id?.name} color={Manga.category_id?.color} hover={Manga.category_id?.hover} />
                <h2 className='font-poppins font-medium text-xl text-[#9D9D9D]'>{Manga.author_id?.name.charAt(0).toUpperCase()}{Manga.author_id?.name.slice(1).toLowerCase()}</h2>
              </div>
              <div className="pt-5">
                <img src={reactions} />
                <img className="pt-2" src={raiting} />
              </div>
            </div>
            :
            ""
          }

          <Switch_manga_chapters toggle={toggle} setToggle={setToggle} />
          {toggle ?
            <div className='w-[80%] sm:w-[60%] lg:w-[40%] pt-3 text-justify text-xs font-normal'>{Manga?.description}</div>
            :
            <div className="w-full flex flex-col items-center pt-5">
              {Chapters.map((each, index) => (
                <div key={index} className="flex py-5 px-5">
                  <Anchor to={'/chapters/' + each._id + '/1'}>
                    <img className="transition hover:scale-110 cursor-pointer w-[83px] lg:w-[150px] h-[74px] lg:h-[120px] object-cover mr-5 lg:mr-10 rounded-lg" src={each?.cover_photo} alt="Chapter Photo" />
                  </Anchor>
                  <div className="flex flex-col justify-between">
                    <h1 className='font-poppins font-normal text-xl '>{"Chapter #" + each?.order}</h1>
                    <div className="flex justify-between">
                      <img src={comment} alt="comment" />
                      <h1 className='font-poppins font-normal text-xl '>{each?.pages.length}</h1>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <Anchor to={'/chapters/' + each._id + '/1'} className='transition hover:scale-95 bg-gradient-to-r from-[#FF5722] to-[#F97316] text-white text-2xl cursor-pointer font-poppins font-bold py-3 w-[151px] rounded-full text-center ml-5 lg:ml-10 h-full lg:h-1/2'>Read</Anchor>
                  </div>
                </div>
              ))}
            </div>}
        </div>
      </div>


    </main>
  )
}