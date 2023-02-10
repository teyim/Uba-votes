import {
  FA_Departments,
  COLTECH_Departments,
  FED_Departments,
  FEMS_Departments,
  FHS_Departments,
  FLPS_Departments,
  FS_Departments,
  HICM_Department,
  HITL_Departments,
  HND_Departments,
  HTTC_Departments,
  HTTTC_Departments,
  NAHPI_Department,
} from 'data/departments';

//returns departments for a given school
export function useDepartments(school: string) {
  switch (school) {
    case 'COLTECH':
      return COLTECH_Departments;
    case 'FA':
      return FA_Departments;
    case 'FHS':
      return FHS_Departments;
    case 'FEMS':
      return FEMS_Departments;
    case 'FED':
      return FED_Departments;
    case 'FLPS':
      return FLPS_Departments;
    case 'FS':
      return FS_Departments;
    case 'HICM':
      return HICM_Department;
    case 'HITL':
      return HITL_Departments;
    case 'HTTC':
      return HTTC_Departments;
    case 'HTTTC':
      return HTTTC_Departments;
    case 'HND':
      return HND_Departments;
    case 'NAHPI':
      return NAHPI_Department;
    default:
      return [];
  }
}
