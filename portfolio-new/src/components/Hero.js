export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-32 bg-gradient-to-r from-blue-100 via-blue-50 to-white">
      
      {/* 사진 섹션 */}
      <div className="w-72 h-72 rounded-full overflow-hidden shadow-xl mb-8 md:mb-0 md:mr-16 border-4 border-gray-100 p-2 bg-white flex items-center justify-center">
        <img 
          src="/윤원준.jpg" 
          alt="윤원준" 
          className="w-full h-full object-contain" 
        />
      </div>
      
      {/* 텍스트 섹션 */}
      <div className="text-center md:text-left md:ml-8">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
          안녕하세요, 윤원준입니다.
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-6">
          변화에 빠르게 적응하며 책임감 있게 성장하는 예비 개발자입니다. <br />
          정보통신공학과에서 배운 네트워크와 소프트웨어 기초 지식을 기반으로, 프론트엔드와 백엔드를 아우르는 풀스택 개발자로 성장하고 있습니다. <br />
          사용자 경험과 효율적인 코드 구조를 고민하며, 협업과 문제 해결 과정에서도 책임감을 가지고 최선을 다합니다.
        </p>

      </div>
    </section>
  );
}
