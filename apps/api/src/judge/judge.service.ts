import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, throwError, catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class JudgeService {
  private readonly logger = new Logger(JudgeService.name);
  constructor(private readonly httpService: HttpService) {}

  async submitCode(
    sourceCode: string,
    languageId: number,
    input?: string,
  ): Promise<any> {
    const body = { sourceCode: sourceCode, languageId: languageId };
    this.logger.log('Object: %o', body);

    const { data } = await firstValueFrom(
      this.httpService
        .post(
          process.env.JUDGE0_URL + '/submissions',
          {
            source_code: sourceCode,
            language_id: languageId,
            stdin: input,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            },
          },
        )
        .pipe(
          catchError((error) => {
            // Return a meaningful error message to the caller
            return throwError(
              () =>
                new Error(
                  `Failed to submit code: ${error.response?.data?.message || error.message}`,
                ),
            );
          }),
        ),
    );

    return data;
  }

  async getSubmission(token: string): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService
        .get(process.env.JUDGE0_URL + '/submissions/' + token, {
          headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          },
        })
        .pipe(
          catchError((error) => {
            // Return a meaningful error message to the caller
            return throwError(
              () =>
                new Error(
                  `Failed to submit code: ${error.response?.data?.message || error.message}`,
                ),
            );
          }),
        ),
    );

    return data;
  }
}
