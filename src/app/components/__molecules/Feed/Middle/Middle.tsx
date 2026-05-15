"use client";
import NewPost from "@/app/components/__atoms/NewPost/NewPost";
import NewPostPopup from "../../NewPostPopup/NewPostPopup";
import { useEffect, useState } from "react";
import { OutsideClick } from "@/app/hooks/OutsideClick";
import Post from "../../Post/Post";
import postImage from "@/../public/Advertisement.png";
import { CheckAuth } from "@/app/hooks/CheckAuth";
import DefaultPfp from "@/../public/PfpDefault.png";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/config/firebase";

function Middle() {
  const [popup, setPopup] = useState<boolean>(false);
  const [postType, setPostType] = useState<string>("");
  const postRef = OutsideClick(() => setPopup(false));
  const mediaRef = OutsideClick(() => setPopup(false));
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    async function getPosts() {
      const quer = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const result = await getDocs(quer);

      const postsList = result.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPosts(postsList);
    }

    getPosts();
  }, []);
  const { profile } = CheckAuth(false);
  return (
    <>
      <div className="ml-7 max-[830px]:ml-0 max-[1100px]:w-full">
        <NewPost
          VideoClick={() => {
            setPopup((prev) => !prev);
            setPostType("media");
          }}
          PhotoClick={() => {
            setPopup((prev) => !prev);
            setPostType("media");
          }}
          TextClick={() => {
            setPopup((prev) => !prev);
            setPostType("normal");
          }}
        />
        <div
          className={`fixed inset-0 transition-all duration-1000 m-auto z-[900] w-full px-[15px] flex justify-center items-center ${popup ? "opacity-100 bg-[#0000008c] pointer-events-auto" : "opacity-0 pointer-events-none bg-transparent"}`}
        >
          <div
            className={`py-10 transition-all duration-1000 ${popup ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} w-full h-full flex items-center justify-center`}
          >
            <NewPostPopup
              mediaRef={mediaRef}
              close={() => setPopup(false)}
              postType={postType}
              ref={postRef}
            />
          </div>
        </div>
        <div className="mt-6 w-full">
          {posts.map((post) => (
            <Post
              id={post.id}
              key={post.id}
              text={post.text}
              ago={post.createdAt?.toDate() ?? new Date()}
              user={post.authorName}
              pfp={post.authorPhoto || DefaultPfp}
              image={post.imageUrl}
              likeCount={post.likeCount || 0}
              commentsCount={post.commentsCount || 0}
              tailwind="max-w-[552px]"
              like={() => {}}
              comments={() => {}}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Middle;
