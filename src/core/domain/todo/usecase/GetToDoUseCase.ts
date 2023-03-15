import { UseCase } from '@core/common/usecase/UseCase';
import { ToDoUseCaseDto } from '@core/domain/todo/usecase/dto/ToDoUseCaseDto';
import { GetToDoPort } from '@core/domain/todo/port/usecase/GetToDoPort';
export interface GetToDoUseCase extends UseCase<GetToDoPort, ToDoUseCaseDto> {}
