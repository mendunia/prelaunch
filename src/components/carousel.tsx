'use client'
import { useRef } from "react";
import { useSnapCarousel } from "react-snap-carousel";

export type carouselData = {
    imageUrl: string,
    title: string,
    desc: string
  }[];

export default function Carousel (props : {children: React.ReactNode, data : any[], id: string, className?: string}) {

    const {scrollRef, pages, activePageIndex,goTo} = useSnapCarousel({axis : "x"});

    const elementRef = useRef<HTMLImageElement>(null)

    return(
    <div className={`flex flex-col gap-3`}>
        <ul className={props.className ? props.className : `relative flex overflow-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-200 snap-mandatory snap-x`} ref={scrollRef}>
            {...[props.children]}
        </ul>

        {pages.length > 1 && <div className='w-full  flex gap-1 justify-center'>
            {pages.map((_, i) => (
                <div key={props.id + i}>
                    <button
                        className={` rounded-full w-3 h-3 transition-all duration-500 ${activePageIndex === i ? "bg-merah-inti" : "bg-grey-medium"}`}
                        onClick={() => goTo(i)}>
                    </button>
                </div>
            ))}
        </div>}
    </div>
    )
    
}
