import { useState } from "react";
import svgPaths from "../imports/Desktop/svg-8qy2nilsze";
import imgHeader from "figma:asset/7bbe69da6574bb3801452225c31f98001676a374.png";
import img from "figma:asset/357a086318175672038b7d175d80837ef67b20ac.png";
import img1 from "figma:asset/8adfe08ccfb9fe5356fe71a9822b859407d592c0.png";
import img2 from "figma:asset/a291ab23e93154687f85b7855ec541fc28036299.png";
import img3 from "figma:asset/52d656ff4cde401c86d7a67fe091dc6542db2334.png";
import img4 from "figma:asset/cfa8e532e5cdc07b430b5c8588e8dde2507ac93e.png";
import img5 from "figma:asset/a976a44d8ab6087caa5352834637ff3be7b65ec3.png";
import img6 from "figma:asset/208b7b6d07073d939c3f921bb29bd4b5b2eba734.png";
import img7 from "figma:asset/b451617cb73394a04f62a7ff72df075b7dc4e51c.png";
import img8 from "figma:asset/183892e16de2452a4a39b1d0d1477eea33808826.png";
import img9 from "figma:asset/377ac2a9f3285b49b59f350809b52916cd7e26d8.png";

// ─── Data ───────────────────────────────────────────────────────────────────

const newsCards = [
  {
    id: 1,
    category: "보도자료",
    title: '카카오클라우드 관리 콘솔 개편… \u201c데이터 중심 콘솔로 사용자 맞춤형 기능 강화\u201d',
    image: img,
    tags: ["#카카오클라우드", "클라우드UI", "#클라우드리소스", "#클라우드콘솔"],
  },
  {
    id: 2,
    category: "보도자료",
    title: "카카오클라우드 도입해 GS샵 AI 검색\u2B1D추천 시스템 월평균 35% 비용 절감",
    image: img1,
    tags: ["#Ai검색", "#GSSHOP", "#GS리테일", "#카카오클라우드"],
  },
  {
    id: 3,
    category: "보도자료",
    title: "몽골 과기대 내 엣지 클라우드 테스트베드 구축 완료",
    image: img2,
    tags: ["#KOICA플랫폼ESG이니셔티브", "#몽골클라우드", "#엣지클라우드", "#카카오클라우드"],
  },
  {
    id: 4,
    category: "보도자료",
    title: "\u201cAI 인프라의 새로운 대안은 \u2018하이브리드 GPUaaS\u2019\u201d",
    image: img3,
    tags: ["#AI인프라", "#HybridGPUaaS", "#카카오클라우드", "#클라우드진흥주간"],
  },
  {
    id: 5,
    category: "보도자료",
    title: "전라남도 주축 \u2018지역 주도형 AI 대전환 사업\u2019 본격 참여",
    image: img4,
    tags: ["#Hybrid GPUaaS", "#전라남도", "#지역주도형AI대전환", "#카카오클라우드"],
  },
  {
    id: 6,
    category: "보도자료",
    title: "if(kakao)25에서 개발\u2B1D운영 효율성 높이는 실전 클라우드 전략 및 사례 공유",
    image: img5,
    tags: ["#MFE", "#MockingGUI", "#MOGU", "#마이크로프론트엔드", "#카카오클라우드", "#쿠브플로우", "#프로메테우스"],
  },
  {
    id: 7,
    category: "보도자료",
    title: "효율\u30FB안정\u30FB확장성 고민 해결하는 \u2018하이브리드 GPUaaS\u2019 출시",
    image: img6,
    tags: ["#GPUaaS", "#Hybrid GPUaaS", "#카카오클라우드", "#하이브리드 GPUaaS"],
  },
  {
    id: 8,
    category: "보도자료",
    title: "동형암호 기반 보안 기업 \u2018크립토랩\u2019과 업무 협약 체결",
    image: img7,
    tags: ["#동형암호", "#카카오클라우드", "#크립토랩", "#클라우드보안"],
  },
  {
    id: 9,
    category: "보도자료",
    title: "오픈인프라데이즈코리아 2025서 VM 마이그레이션 및 머신러닝 자동화 전략 발표",
    image: img8,
    tags: ["#VM마이그레이션", "#오픈인프라데이즈코리아", "#카카오클라우드", "#쿠브플로우"],
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function HamburgerIcon() {
  return (
    <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 17">
      <path d="M0 0.5H22M0 8.5H22M0 16.5H22" stroke="white" strokeLinejoin="round" />
    </svg>
  );
}

function SlideArrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.11822 4.55911">
      <path d={svgPaths.p29f3c6c0} stroke="white" strokeLinejoin="round" />
    </svg>
  );
}

function PlayPauseIcon() {
  return (
    <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 7">
      <path d={svgPaths.p29416180} fill="white" />
    </svg>
  );
}

function AiBadge() {
  return (
    <div
      className="inline-grid place-items-start shrink-0"
      style={{ gridTemplateColumns: "max-content", gridTemplateRows: "max-content", marginRight: "-12px" }}
    >
      {/* Union / bubble shape */}
      <div className="col-start-1 row-start-1 w-[66px] h-[36px] sm:w-[88px] sm:h-[48px] relative">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 48">
          <path d={svgPaths.p34895ec0} fill="black" />
        </svg>
      </div>
      {/* + icon */}
      <div className="col-start-1 row-start-1 size-[16px] sm:size-[22px] relative" style={{ marginLeft: 10, marginTop: 10 }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <path d={svgPaths.p2dd5f180} fill="white" />
        </svg>
      </div>
      {/* AI text */}
      <p
        className="col-start-1 row-start-1 text-white text-[20px] sm:text-[28px] not-italic relative"
        style={{ fontFamily: "'Pretendard', sans-serif", marginLeft: 38, marginTop: 6 }}
      >
        AI
      </p>
    </div>
  );
}

function ConnectTitle() {
  return (
    <div className="flex items-end leading-[0] pr-[12px] shrink-0 w-full">
      <div className="text-[40px] text-black shrink-0 mr-[-12px]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}>
        <p className="leading-normal mb-0">Connect.</p>
        <p className="leading-normal mb-0">Solve.</p>
        <p className="leading-normal">Create.</p>
      </div>
      <AiBadge />
    </div>
  );
}

function NewsCard({ card, isLast }: { card: typeof newsCards[0]; isLast: boolean }) {
  return (
    <div className="flex flex-col gap-5 items-start w-full">
      {/* Category label */}
      <div className="flex flex-col gap-px items-start shrink-0">
        <p className="text-[14px] lg:text-[20px] text-black whitespace-nowrap" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}>
          {card.category}
        </p>
        <div className="h-0 relative w-full">
          <svg className="block w-full" style={{ height: "1px" }} viewBox="0 0 60 1" preserveAspectRatio="none">
            <line x1="0" y1="0.5" x2="60" y2="0.5" stroke="#FFB500" strokeWidth="0.85" />
          </svg>
        </div>
      </div>
      {/* Title */}
      <p className="text-[24px] lg:text-[38px] text-black w-full" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}>
        {card.title}
      </p>
      {/* Image */}
      <div className="h-[196px] relative rounded-xl shrink-0 w-full">
        <img
          alt={card.title}
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-xl size-full"
          src={card.image}
        />
      </div>
      {/* Tags */}
      <div className="flex flex-wrap gap-[6px_4px] items-start w-full">
        {card.tags.map((tag, i) => (
          <div key={i} className="bg-[#f0f0f0] flex items-center justify-center px-4 py-[6px] rounded-[80px] shrink-0">
            <p className="text-[#858585] text-[14px] lg:text-[20px] whitespace-nowrap" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}>
              {tag}
            </p>
          </div>
        ))}
      </div>
      {/* Divider (except last) */}
      {!isLast && (
        <div className="h-px w-full bg-[#D0D0D0] shrink-0" />
      )}
    </div>
  );
}

function PlusCircleIcon() {
  return (
    <div className="relative shrink-0 size-[32px] md:size-[40px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 40 40">
        <g>
          <path d={svgPaths.p3c12f200} fill="black" />
          <path d={svgPaths.p2be0bf00} stroke="white" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRightIcon({ color = "black" }: { color?: string }) {
  return (
    <div className="bg-[#f0f0f0] overflow-clip relative rounded-full shrink-0 size-[18px] flex items-center justify-center">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M1 4h6M5 2l2 2-2 2" stroke={color} strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function DiagonalArrowIcon() {
  return (
    <div className="bg-[#f0f0f0] overflow-clip relative rounded-full shrink-0 size-[18px] flex items-center justify-center">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M2 6L6 2M6 2H3M6 2v3" stroke="#858585" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Instagram icon
function InstagramIcon() {
  return (
    <div className="bg-[#989898] overflow-clip relative rounded-full shrink-0 size-[40px]">
      <div className="absolute inset-1/4">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" viewBox="0 0 21.6667 21.6667">
            <path d={svgPaths.p9b8ea80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p12b2e300} stroke="white" strokeWidth="1.66667" />
            <path d={svgPaths.p144c6c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Facebook icon
function FacebookIcon() {
  return (
    <div className="bg-[#989898] overflow-clip relative rounded-full shrink-0 size-[40px] flex items-center justify-center">
      <svg width="10.9375" height="20.8333" fill="none" viewBox="0 0 10.9375 20.8333">
        <path d={svgPaths.p20f2a400} fill="white" />
      </svg>
    </div>
  );
}

// Blog icon
function BlogIcon() {
  return (
    <div className="bg-[#989898] overflow-clip relative rounded-full shrink-0 size-[40px] flex items-center justify-center">
      <svg width="15.556" height="20" fill="none" viewBox="0 0 15.556 20">
        <path clipRule="evenodd" d={svgPaths.pe872500} fill="white" fillRule="evenodd" />
      </svg>
    </div>
  );
}

// YouTube icon
function YouTubeIcon() {
  return (
    <div className="bg-[#989898] overflow-clip relative rounded-full shrink-0 size-[40px] flex items-center justify-center">
      <svg width="22.2167" height="15.5517" fill="none" viewBox="0 0 22.2167 15.5517">
        <path d={svgPaths.p32db3f00} fill="white" />
      </svg>
    </div>
  );
}

// KakaoTalk channel icon
function KakaoChannelIcon() {
  return (
    <div className="bg-[#989898] overflow-clip relative rounded-full shrink-0 size-[40px]">
      <div className="absolute inset-[22.92%_21.86%_22.92%_22.08%]">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 22.4208 21.6667">
          <path clipRule="evenodd" d={svgPaths.p4dfc470} fill="white" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

// Up arrow for footer dropdowns
function UpArrowIcon() {
  return (
    <div className="flex items-center justify-center shrink-0">
      <div className="-scale-y-100">
        <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
          <path d="M11 9.5L7 5.5L3 9.5" stroke="#858585" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

// ─── Main Sections ───────────────────────────────────────────────────────────

function Header({ currentSlide, setCurrentSlide }: { currentSlide: number; setCurrentSlide: (n: number) => void }) {
  const slides = [
    {
      title: "<카카오클라우드 고객사례> AI 특화 서비스로 비용 절감",
    },
    {
      title: '카카오클라우드 관리 콘솔 개편\u2026 \u201c데이터 중심 콘솔로 사용자 맞춤형 기능 강화\u201d',
    },
  ];

  const handlePrev = () => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  const handleNext = () => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);

  return (
    <div className="relative w-full overflow-hidden h-[500px] sm:h-[556px] lg:h-[800px]">
      {/* Background image + overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeader} />
        <div className="absolute bg-black/40 inset-0" />
      </div>

      <div className="relative h-full flex flex-col justify-between px-4 md:px-16 lg:px-32">
        {/* Nav */}
        <div className="flex items-center justify-between pt-6">
          <p className="text-[24px] lg:text-[38px] text-white whitespace-nowrap" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}>
            kakaoenterprise
          </p>
          <button className="relative shrink-0 size-8 cursor-pointer">
            <div className="absolute inset-0 overflow-clip">
              <div className="absolute left-[15.63%] right-[15.63%] top-1/2 -translate-y-1/2 aspect-[13.75/10]">
                <div className="absolute inset-[-3.13%_0]">
                  <HamburgerIcon />
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Hero text */}
        <div className="flex flex-col gap-6 items-start">
          <p
            className="text-[32px] md:text-[44px] lg:text-[62px] text-white w-full"
            style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 700 }}
          >
            {slides[currentSlide].title}
          </p>
          <div className="flex h-[46px] items-center justify-center rounded-[80px] shrink-0 w-[148px] lg:w-[160px] border border-white cursor-pointer">
            <p
              className="text-[14px] lg:text-[20px] text-white whitespace-nowrap"
              style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
            >
              자세히 보기
            </p>
          </div>
        </div>

        {/* Slide controls */}
        <div className="flex gap-6 md:gap-14 items-center justify-center pb-6">
          {/* Prev */}
          <button onClick={handlePrev} className="cursor-pointer overflow-clip relative rounded-full shrink-0 size-5">
            <div className="-translate-y-1/2 absolute flex items-center justify-center left-[40%] right-[42%] top-1/2">
              <div className="-rotate-90 w-[7.4px] h-[3.7px]">
                <div className="relative size-full">
                  <div className="absolute inset-[-13.49%_-4.77%_-9.54%_-4.77%]">
                    <SlideArrow />
                  </div>
                </div>
              </div>
            </div>
          </button>

          {/* Pagination + play */}
          <div className="flex gap-3 items-center shrink-0">
            <div className="flex gap-1 items-center shrink-0">
              <div
                className="text-center text-[14px] lg:text-[20px] w-[14px] h-[26px] flex items-center justify-center"
                style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500, color: "#FFE100" }}
              >
                {currentSlide + 1}
              </div>
              <div className="relative shrink-0 size-[2px]">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 2 2">
                  <circle cx="1" cy="1" fill="white" r="1" />
                </svg>
              </div>
              <div
                className="text-center text-[14px] lg:text-[20px] text-white w-[14px] h-[26px] flex items-center justify-center"
                style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
              >
                {slides.length}
              </div>
            </div>
            <button className="cursor-pointer flex items-center justify-center p-2 shrink-0 size-5">
              <div className="h-[7px] relative shrink-0 w-[5px]">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 5 7">
                  <path d={svgPaths.p29416180} fill="white" />
                </svg>
              </div>
            </button>
          </div>

          {/* Next */}
          <button onClick={handleNext} className="cursor-pointer overflow-clip relative rounded-full shrink-0 size-5">
            <div className="-translate-y-1/2 absolute flex items-center justify-center left-[40%] right-[42%] top-1/2">
              <div className="-rotate-90 -scale-y-100 w-[7.4px] h-[3.7px]">
                <div className="relative size-full">
                  <div className="absolute inset-[-13.49%_-4.77%_-9.54%_-4.77%]">
                    <SlideArrow />
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function NewsSection() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-[60px] items-start px-4 md:px-16 lg:px-32 w-full">
        <ConnectTitle />

        {/* Cards grid */}
        <div className="flex flex-wrap gap-y-10 gap-x-0 md:gap-x-8 lg:gap-x-[72px] items-start w-full">
          {newsCards.map((card, index) => (
            <div
              key={card.id}
              className="flex flex-col gap-5 items-start"
              style={{
                flex: "1 0 0",
                maxWidth: "476px",
                minWidth: "294px",
                minHeight: "1px",
              }}
            >
              <NewsCard card={card} isLast={index === newsCards.length - 1} />
            </div>
          ))}
        </div>

        {/* Load more button */}
        <div className="flex flex-col items-center pb-6 w-full">
          <div className="flex gap-3 items-center cursor-pointer">
            <p
              className="text-[14px] lg:text-[20px] text-black whitespace-nowrap"
              style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
            >
              더 불러오기
            </p>
            <PlusCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoCTA() {
  return (
    <div className="w-full flex justify-center px-0 md:px-16 lg:px-32">
      <div
        className="relative flex flex-wrap gap-8 items-center justify-center overflow-hidden w-full md:rounded-xl lg:rounded-xl py-10"
        style={{ minHeight: "232px" }}
      >
        {/* Background image + overlay */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={img9} />
          <div className="absolute bg-black/40 inset-0" />
        </div>
        <p
          className="relative text-[24px] md:text-[32px] lg:text-[38px] text-center text-white max-w-[290px] md:max-w-[400px] lg:max-w-[460px]"
          style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}
        >
          카카오엔터프라이즈의 다양한 영상 자료들도 확인해보세요
        </p>
        <div className="bg-white flex h-[46px] items-center justify-center relative rounded-[80px] shrink-0 w-[148px] lg:w-[160px] cursor-pointer">
          <p
            className="text-[14px] lg:text-[20px] text-black whitespace-nowrap"
            style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
          >
            공식채널 보기
          </p>
        </div>
      </div>
    </div>
  );
}

function BusinessSection() {
  const cards = [
    {
      id: 1,
      label: "회사소개",
      title: "카카오엔터프라이즈는 비즈니스와 일상에 기술을 더하여 디지털 혁신을 만들어갑니다.",
      link: "회사소개 바로가기",
      isDiagonal: false,
    },
    {
      id: 2,
      label: "개발자",
      title: "카카오엔터프라이즈는 개발자들과 함께 성장하는 기술 기업입니다.",
      link: "개발자 바로가기",
      isDiagonal: false,
    },
    {
      id: 3,
      label: "인재영입",
      title: "국내 최고의 개발자, 기획자, 디자이너 그리고 비즈니스 전문가가 모여 새로운 길을 만들어갑니다.",
      link: "인재영입 바로가기",
      isDiagonal: true,
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col gap-10 items-start pt-6 px-4 md:px-16 lg:px-32 w-full">
        <p
          className="text-[32px] lg:text-[62px] text-black whitespace-nowrap"
          style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 700 }}
        >
          혁신적인 비즈니스
        </p>

        <div className="flex flex-wrap gap-16 items-start w-full">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col gap-6 items-start"
              style={{ flex: "1 0 0", minWidth: "154px", maxWidth: "370px", minHeight: "1px" }}
            >
              {/* Text */}
              <div className="flex flex-col gap-3 items-start w-full">
                <p
                  className="text-[#ffb500] text-[14px] lg:text-[20px] whitespace-nowrap"
                  style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
                >
                  {card.label}
                </p>
                <p
                  className="text-[24px] lg:text-[38px] text-black w-full"
                  style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}
                >
                  {card.title}
                </p>
              </div>
              {/* Link */}
              <div className="flex gap-2 h-[18px] items-center cursor-pointer">
                <p
                  className="text-[#858585] text-[14px] lg:text-[20px] whitespace-nowrap"
                  style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
                >
                  {card.link}
                </p>
                {card.isDiagonal ? <DiagonalArrowIcon /> : <ArrowRightIcon />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-y-12 items-baseline justify-between px-4 md:px-16 lg:px-32 py-12 w-full">

        {/* Footer text menu */}
        <div className="flex flex-wrap gap-7 items-center max-w-[200px] md:max-w-[400px] lg:max-w-[601px]">
          <div className="flex gap-1 items-center cursor-pointer">
            <p
              className="text-[#858585] text-[14px] lg:text-[20px] whitespace-nowrap"
              style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
            >
              회사소개
            </p>
            <UpArrowIcon />
          </div>
          <p
            className="text-[14px] lg:text-[20px] text-black whitespace-nowrap"
            style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
          >
            개인정보처리방침
          </p>
          <p
            className="text-[#858585] text-[14px] lg:text-[20px] whitespace-nowrap cursor-pointer"
            style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
          >
            사이버윤리실
          </p>
          <div className="flex gap-1 items-center cursor-pointer">
            <p
              className="text-[#858585] text-[14px] lg:text-[20px] whitespace-nowrap"
              style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
            >
              공지사항
            </p>
            <UpArrowIcon />
          </div>
          <p
            className="text-[#858585] text-[14px] lg:text-[20px] whitespace-nowrap cursor-pointer"
            style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
          >
            고객지원
          </p>
        </div>

        {/* Related sites button */}
        <div className="bg-[#f0f0f0] flex h-10 items-center justify-between px-6 relative rounded-[80px] shrink-0 w-[200px] md:w-[256px] cursor-pointer">
          <p
            className="text-[#858585] text-[14px] lg:text-[20px] whitespace-nowrap"
            style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
          >
            관련사이트
          </p>
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path d="M2 8H8M8 8H14M8 8V2M8 8V14" stroke="#858585" strokeLinejoin="round" />
          </svg>
        </div>

        {/* SNS icons */}
        <div className="flex gap-6 items-center shrink-0">
          <InstagramIcon />
          <FacebookIcon />
          <BlogIcon />
          <YouTubeIcon />
          <KakaoChannelIcon />
        </div>

        {/* Copyright */}
        <p
          className="text-[14px] lg:text-[20px] text-black whitespace-nowrap w-full"
          style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
        >
          © Kakao Enterprise Corp.
        </p>
      </div>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="bg-white flex flex-col gap-[88px] items-center w-full">
      <Header currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      <NewsSection />
      <VideoCTA />
      <BusinessSection />
      <Footer />
    </div>
  );
}