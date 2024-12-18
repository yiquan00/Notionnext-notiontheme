import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'


/**
 * 文章背景图
 */
export default function PostHero({ post, siteInfo }) {
  console.log(post)
  const headerImage = post?.pageCoverThumbnail
    ? post?.pageCoverThumbnail
    : siteInfo?.pageCover
  const title = post?.title
  const summary = post?.summary
  return (
    <div
      id='header'
      className='flex flex-col h-auto justify-center align-middle items-center w-full relative '>
        {/* 原来的配置 */}
      {/* <div
        data-wow-delay='.1s'
        className='wow fadeInUp z-10 leading-snug font-bold xs:text-4xl sm:text-4xl md:text-5xl md:leading-snug text-4xl shadow-text-md flex justify-center text-center text-white'>
        {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post?.pageIcon} />}
        {title}
      </div> */}

     

      
      {/* <LazyImage
        alt={title}
        src={headerImage}
        className='pointer-events-none select-none w-full h-full object-cover opacity-30 absolute'
        placeholder='blur'
        blurDataURL={siteConfig('IMG_LAZY_LOAD_PLACEHOLDER')}
      /> */}

{/* 原来配置结束 */}







    {/* 样式修改，模仿Notion官方主题页面，增加移动端适配 */}
    {post?.type === 'Post' ? (

      <div className="flex flex-col items-center w-full px-4 py-8 space-y-8">
        <div className="flex flex-col md:flex-row w-full max-w-6xl md:space-x-8 space-y-8 md:space-y-0">
          {/* 左侧内容 */}
          <div className="flex flex-col space-y-4 order-2 md:order-1 md:w-1/2 mt-8 md:mt-0 dark:text-white">
            <h1 className="text-3xl font-bold"> {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post?.pageIcon} />}{title}</h1>
            <p>
            {summary}
            </p>
            {post?.url && (
                <div className="my-4">
                  <Link href={post.url} className="w-fit bg-blue-700 hover:bg-[#ea580c] text-white font-bold py-2 px-4 rounded" rel="nofollow" target="_blank">
                    点击访问  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                </div>
              )}
          </div>
          {/* 右侧图片 */}
          <div className="flex justify-center order-1 md:order-2 md:w-1/2 sm:mb-4">
            <LazyImage
              alt={title}
              src={headerImage}
              className='rounded-xl w-full shadow-lg'
              placeholder='blur'
              width="600"
              height="300"
              blurDataURL={siteConfig('IMG_LAZY_LOAD_PLACEHOLDER')}
              style={{ aspectRatio: "600/300", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    ) : (
      <div className="flex flex-col items-center w-full px-4 py-8 space-y-8">
        <h1 className="text-3xl font-bold text-center dark:text-white">
          {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post?.pageIcon} />}{title}
        </h1>
      </div>
    )}


    </div>
  )
}
