import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Employee, EmployeeDto } from '../../common/interfaces/career';

export class EmployeesService<Properties extends object = object> extends RestfulService<
  Employee<Properties>,
  EmployeeDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('career/employees', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new EmployeesService<Properties>(axios);
  }
}
