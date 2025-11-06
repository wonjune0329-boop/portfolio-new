import React from 'react';

// Contact 정보를 객체로 정의
const contactInfo = [
    { type: 'Phone', icon: '📞', value: '010-2682-8392', prefix: 'tel:' },
    { type: 'Email', icon: '📧', value: 'ceratops1106@naver.com', prefix: 'mailto:' },
    { type: 'Github', icon: '🐈', value: 'https://github.com/wonjune0329-boop' }, // prefix 제거
];

export default function Contact() {
  return (
    // 배경색을 흰색(bg-white)으로 설정하고 텍스트 색상을 어두운 회색으로 통일
    <section id="contact" className="py-20 bg-white text-gray-800 text-center">
      <div className="max-w-xl mx-auto px-4">
        
        {/* 제목 */}
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900">Contact</h2>
        
        <div className="flex flex-col space-y-8">
          {contactInfo.map((item) => (
            <div key={item.type} className="flex items-center justify-center space-x-4">
              
              {/* 아이콘 및 레이블: 폰트 크기와 색상을 깔끔하게 조정 */}
              <p className="text-xl font-semibold flex items-center w-32 justify-end">
                {/* 아이콘 색상을 파란색으로 변경 */}
                <span className="text-3xl mr-3 text-blue-600">{item.icon}</span> 
                {item.type}
              </p>
              
              {/* 연락처 값: 파란색 텍스트로 강조 */}
              <a 
                href={item.prefix ? `${item.prefix}${item.value}` : item.value}
                className="text-xl text-blue-600 hover:text-blue-700 transition duration-200 text-left w-64"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-medium">
                    {item.value}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}