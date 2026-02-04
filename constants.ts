
import { Artist, NewsItem } from './types';

export const ARTISTS: Artist[] = [
  {
    id: 'ateez',
    name: '에이티즈',
    englishName: 'ATEEZ',
    members: ['홍중', '성화', '윤호', '여상', '산', '민기', '우영', '종호'],
    description: 'Eight Makes One Team! 글로벌 퍼포먼스의 강자.',
    imageUrl: 'https://picsum.photos/seed/ateez/800/600',
    color: 'from-orange-600 to-red-600'
  },
  {
    id: 'xikers',
    name: '싸이커스',
    englishName: 'xikers',
    members: ['민재', '준민', '수민', '진식', '현우', '정훈', '세은', '유준', '헌터', '예찬'],
    description: 'TRICKY HOUSE! KQ엔터테인먼트의 폭발적인 차세대 아티스트.',
    imageUrl: 'https://picsum.photos/seed/xikers/800/600',
    color: 'from-blue-600 to-indigo-600'
  }
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: 1,
    title: "에이티즈, 美 빌보드 200 7연속 TOP 10 진입",
    summary: "미니 12집 등 총 7개 앨범 연속 톱10 진입, 실물 음반 및 스트리밍 합산 성과 입증.",
    source: "빌보드 뉴스",
    tags: ["빌보드", "성과"],
    date: "2024-03-20",
    likes: 850
  },
  {
    id: 2,
    title: "KQ엔터 매출 92배 폭풍 성장",
    summary: "공연 매출이 2021년 6억 원에서 2024년 564억 원으로 급증. 전체 매출 비중 49% 차지.",
    source: "경제 투데이",
    tags: ["매출", "비즈니스"],
    date: "2024-03-18",
    likes: 420
  },
  {
    id: 3,
    title: "북미 스타디움 투어의 성공",
    summary: "LA 등 5개 도시 스타디움 공연 성사. 티켓 파워 입증하며 1000억 원대 매출 기업 도약.",
    source: "K-Pop 인사인더",
    tags: ["스타디움투어", "글로벌"],
    date: "2024-03-15",
    likes: 1205
  },
  {
    id: 4,
    title: "4세대 아이돌과 글로벌 전략",
    summary: "데뷔 100일 만에 북미 투어를 감행하는 '글로벌 선 진출' 전략과 젠지(Gen Z) 감성 공략.",
    source: "컬처 리포트",
    tags: ["전략", "젠지"],
    date: "2024-03-10",
    likes: 310
  }
];

export const REVENUE_DATA = [
  { year: '2021', revenue: 6, label: '6억' },
  { year: '2022', revenue: 150, label: '150억' },
  { year: '2023', revenue: 420, label: '420억' },
  { year: '2024', revenue: 564, label: '564억' },
];
