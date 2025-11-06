import React from "react";

const frontend = ["HTML/CSS", "JavaScript", "React"];
const backend = ["Java", "Spring Boot", "Python", "Flask", "Node.js"];
const database = ["MySQL", "PostgreSQL"];
// 카테고리 명칭과 목록을 논의된 내용에 따라 수정
const dev_tools = ["Git", "Render", "VS Code", "IntelliJ", "Eclipse"];

export default function Skills() {
  return (
    // padding-y를 줄이고 (py-32 -> py-20) 섹션 구분을 명확히 합니다.
    <section id="skills" className="py-20 bg-white text-gray-800 text-center">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* 제목 폰트 크기 및 색상 강조 */}
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900">사용 기술</h2>
        
        <p className="max-w-2xl mx-auto text-gray-600 mb-12 text-lg">
          프론트엔드부터 백엔드까지 프로젝트를 성공적으로 완수하는 데 <br /> 필요한 다양한 기술 스택입니다.
        </p>

        {/* 카드 컨테이너: flex-wrap과 gap을 사용하여 반응형으로 배치 */}
        <div className="flex flex-wrap justify-center gap-6">
          
          {/* 각 TechSection을 독립적인 카드로 변경 */}
          <TechCard title="Frontend" skills={frontend} />
          <TechCard title="Backend" skills={backend} />
          <TechCard title="Database" skills={database} />
          <TechCard title="개발 환경 & 도구" skills={dev_tools} />
          
        </div>
      </div>
    </section>
  );
}

// TechSection 컴포넌트를 Card 디자인을 포함한 TechCard 컴포넌트로 변경
function TechCard({ title, skills }) {
  return (
    // 카드 스타일: 파란색 테두리, 그림자, hover 효과를 적용하여 시각적으로 강조
    <div className="w-full sm:w-[45%] lg:w-[22%] p-6 border-2 border-blue-200 rounded-xl shadow-lg hover:shadow-xl transition duration-300 bg-white min-h-[300px]">
      
      {/* 카테고리 제목: 파란색으로 강조 및 구분선 추가 */}
      <h3 className="text-xl font-bold mb-4 text-blue-700 border-b border-blue-300 pb-2">
        {title}
      </h3>
      
      {/* 기술 태그 목록: flex-wrap을 사용하여 가로로 유연하게 배치 */}
      <div className="flex flex-wrap justify-center mt-4">
        {skills.map((skill) => (
          <span
            key={skill}
            // 태그 스타일: bg-blue-100, rounded-lg(직사각형)으로 변경하여 이미지 디자인 반영
            className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-lg m-1 hover:bg-blue-200 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}