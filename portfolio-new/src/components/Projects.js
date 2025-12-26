import React from 'react';
import spring from '../assets/spring.png';
import chatbot from '../assets/chatbot.png';
import interview from '../assets/interview.png';

// 프로젝트 데이터 정의 (이미지 경로 및 설명 업데이트)
const projectData = [
    {
        title: " AI 면접 시뮬레이션 플랫폼 (Interview Master)",
        subtitle: "면접 준비를 위한 AI 기반 시뮬레이션 서비스",
        description: "취준생들을 위한 AI 면접 시뮬레이션 플랫폼으로, 사용자가 실제 면접 상황을 연습할 수 있도록 돕습니다. React 프론트엔드와 Django 백엔드를 활용하여 사용자 친화적인 인터페이스와 안정적인 서버 환경을 구축했습니다.",
        techs: ["React", "JavaScript", "axios", "JavaScript", "Python", "Django", "MySQL", "AWS Lightsail"],
        github: "https://github.com/jglee2772/interview_simul", // ⭐⭐ 깃허브 주소 적용 ⭐⭐
        live: "http://13.125.180.201/", 
        // ⭐⭐ 제공해주신 log21.png 이미지 경로 적용 ⭐⭐
        image: interview // `/public` 폴더 바로 아래의 `log21.png` 파일을 사용합니다.
    },
    {
        title: " AI 챗봇 연동 음식 추천 웹 서비스 (LunchBot)",
        subtitle: "멀티 서버 구조로 구현한 실시간 위치 기반 음식 추천 시스템",
        description: "사용자가 챗봇과 대화하며 선호하는 음식을 추천받고, 추천 완료 후 관련 음식점을 실시간 위치 기반 지도로 표시해주는 풀스택 웹 서비스입니다. Spring 서버(메인)와 Flask 서버(AI 챗봇 API)를 연동하여 멀티 서버 아키텍처 구현 및 API 연동 경험을 쌓았습니다.",
        techs: ["HTML/CSS", "JavaScript", "axios", "Java", "Spring Boot", "Python", "Flask", "PostgreSQL", "Render"],
        github: "https://github.com/jglee2772/chatFood", // ⭐⭐ 깃허브 주소 적용 ⭐⭐
        live: "https://chatfood-spring-boot.onrender.com/", 
        // ⭐⭐ 제공해주신 log21.png 이미지 경로 적용 ⭐⭐
        image: chatbot // `/public` 폴더 바로 아래의 `log21.png` 파일을 사용합니다.
    },
    {
        title: " Spring 기반 미니멀 게시판 서비스",
        subtitle: "Spring Boot 학습을 위한 기본 CRUD 웹 애플리케이션",
        description: `국비 교육 과정에서 Spring Boot의 핵심 기능을 숙달하기 위해 개발한 게시판 사이트입니다.
                        사용자 인증을 포함한 기본적인 CRUD(생성/조회/수정/삭제) 기능을 구현하여 백엔드 개발 흐름을 완전히 이해하는 데 중점을 두었습니다.
                        본 서비스는 Render 무료 플랜으로 배포되어 있으며,
                        일정 기간 미접속 시 서버가 자동 슬립 또는 만료될 수 있습니다.
                        현재는 서비스 구조 및 배포 경험 공유를 목적으로 유지 중입니다.`,
        techs: ["Spring Boot", "PostgreSQL", "HTML/CSS"],
        github: "https://github.com/wonjune0329-boop/myFirstBoard", // 실제 GitHub 주소로 변경 필요
        live: "https://myfirstboard-4fey.onrender.com/",
        // ⭐⭐ 게시판 프로젝트 이미지 경로 (실제 파일명으로 변경 필요) ⭐⭐
        image: spring // 이 파일은 `/public/images`에 있어야 합니다.
    }
];

// 기술 태그 컴포넌트 (Skills 섹션과 동일한 디자인 유지)
const TechTag = ({ name }) => (
    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-md m-1">
        {name}
    </span>
);

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-white text-gray-800 text-center">
            <div className="max-w-6xl mx-auto px-4">
                
                <h2 className="text-4xl font-extrabold mb-4 text-gray-900 flex items-center justify-center">
                    <span className="mr-3 text-2xl">💼</span> My Projects
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                    주요 프로젝트를 통해 저의 문제 해결 능력과 기술 역량을 확인해보세요.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {projectData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ProjectCard 컴포넌트
function ProjectCard({ project }) {
  return (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="group bg-white border border-gray-200 rounded-xl shadow-lg
                      hover:shadow-2xl transition duration-300
                      transform hover:-translate-y-2
                      text-left overflow-hidden cursor-pointer
                      h-full flex flex-col">
        
        {/* 이미지 */}
        <div className="w-full h-40 bg-gray-100 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} 스크린샷`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 콘텐츠 */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 text-gray-900">
            {project.title}
          </h3>

          <p className="text-sm font-semibold mb-3 text-blue-600 border-b border-gray-200 pb-2">
            {project.subtitle}
          </p>

          <p className="text-gray-700 text-sm leading-relaxed
                        line-clamp-3 group-hover:line-clamp-none
                        transition-all duration-300">
            {project.description}
          </p>

          {/* 기술 스택 */}
          <div className="mb-4">
            <h4 className="text-sm font-bold text-gray-700 mb-2">
              주요 기술 스택:
            </h4>
            <div className="flex flex-wrap">
              {project.techs.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex space-x-4 mt-auto">
            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-block bg-gray-800 text-white font-semibold
                        py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition"
            >
                GitHub 보기
            </a>
          </div>
        </div>
      </div>
    </a>
  );
}
