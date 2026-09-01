
export const checkStudentAuth=()=>{if(typeof window==="undefined") return false; const s=localStorage.getItem("student_auth_v13"); if(!s) return false; try{const p=JSON.parse(s); return p.completed && p.verified;}catch{return false;}};
export const checkTeacherAuth=()=>{if(typeof window==="undefined") return false; const s=localStorage.getItem("teacher_auth_v13"); if(!s) return false; try{const p=JSON.parse(s); return p.completed && p.verified;}catch{return false;}};
