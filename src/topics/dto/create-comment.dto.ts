import {ApiModelProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';

export class CreateCommentDto {
    @Expose()
    @ApiModelProperty()
    readonly text: string;
}
