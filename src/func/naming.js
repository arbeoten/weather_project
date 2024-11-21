function naming(city) {
   if (city === 'Seoul') return '서울'
   else if (city === 'Incheon') return '인천'
   else if (city === 'Chuncheon') return '춘천'
   else if (city === 'Daejeon') return '대전'
   else if (city === 'Daegu') return '대구'
   else if (city === 'Busan') return '부산'
   else if (city === 'Gwangju') return '광주'
   else if (city === 'Jeju City') return '제주'
   else return 'Unknown'
}

export default naming
