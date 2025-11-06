import React from 'react';

// 프로젝트 데이터 정의 (이미지 경로 및 설명 업데이트)
const projectData = [
    {
        title: "🖥️ Spring 기반 미니멀 게시판 서비스",
        subtitle: "Spring Boot 학습을 위한 기본 CRUD 웹 애플리케이션",
        description: "국비 교육 과정에서 Spring Boot의 핵심 기능을 숙달하기 위해 개발한 게시판 사이트입니다. 사용자 인증을 포함한 기본적인 CRUD(생성/조회/수정/삭제) 기능을 구현하여 백엔드 개발 흐름을 완전히 이해하는 데 중점을 두었습니다.",
        techs: ["Spring Boot", "PostgreSQL", "HTML/CSS"],
        github: "https://github.com/wonjune0329-boop/myFirstBoard", // 실제 GitHub 주소로 변경 필요
        live: "https://myfirstboard-4fey.onrender.com/",
        // ⭐⭐ 게시판 프로젝트 이미지 경로 (실제 파일명으로 변경 필요) ⭐⭐
        image: "/로고3.png" // 이 파일은 `/public/images`에 있어야 합니다.
    },
    {
        title: "🤖 AI 챗봇 연동 음식 추천 웹 서비스 (LunchBot)",
        subtitle: "멀티 서버 구조로 구현한 실시간 위치 기반 음식 추천 시스템",
        description: "사용자가 챗봇과 대화하며 선호하는 음식을 추천받고, 추천 완료 후 관련 음식점을 실시간 위치 기반 지도로 표시해주는 풀스택 웹 서비스입니다. Spring 서버(메인)와 Flask 서버(AI 챗봇 API)를 연동하여 멀티 서버 아키텍처 구현 및 API 연동 경험을 쌓았습니다.",
        techs: ["HTML/CSS", "JavaScript", "axios", "Java", "Spring Boot", "Python", "Flask", "PostgreSQL", "Render"],
        github: "https://github.com/jglee2772/chatFood", // ⭐⭐ 깃허브 주소 적용 ⭐⭐
        live: "https://chatfood-spring-boot.onrender.com/", 
        // ⭐⭐ 제공해주신 log21.png 이미지 경로 적용 ⭐⭐
        image: "/로고1.png" // `/public` 폴더 바로 아래의 `log21.png` 파일을 사용합니다.
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-left overflow-hidden">
            
            {/* 프로젝트 이미지 영역 (카드 상단에 배치) */}
            <div className="w-full h-56 bg-gray-100 overflow-hidden">
                <img 
                    src={project.image} 
                    alt={`${project.title} 스크린샷`} 
                    className="w-full h-full object-cover" 
                />
            </div>
            
            {/* 카드 내부 콘텐츠 */}
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-sm font-semibold mb-3 text-blue-600 border-b border-gray-200 pb-2">{project.subtitle}</p>
                
                <p className="text-gray-700 mb-4 text-base leading-relaxed">{project.description}</p>
                
                {/* 사용 기술 목록 */}
                <div className="mb-4">
                    <h4 className="text-sm font-bold text-gray-700 mb-2">주요 기술 스택:</h4>
                    <div className="flex flex-wrap">
                        {project.techs.map((tech) => (
                            <TechTag key={tech} name={tech} />
                        ))}
                    </div>
                </div>

                {/* 링크 버튼 */}
                <div className="flex space-x-4 mt-6">
                    <a 
                        href={project.github} 
                        className="inline-block bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition"
                        target="_blank" rel="noopener noreferrer"
                    >
                        GitHub 보기
                    </a>
                    {project.live !== "#" && (
                        <a 
                            href={project.live} 
                            className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
                            target="_blank" rel="noopener noreferrer"
                        >
                            서비스 바로가기
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}