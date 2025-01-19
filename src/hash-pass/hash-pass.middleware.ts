import { Injectable, NestMiddleware } from '@nestjs/common';
import {genSalt, hash} from "bcrypt"


@Injectable()
export class HashPassMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: Error | any) => void) {
    throw new Error('Method not implemented.');
  }
  async hash(pass: string) {
    try{
      if(!pass) throw new Error("Informe sua senha!")
      const salt = await genSalt(7)
      const hashPass = await hash(pass, salt)
      return hashPass
    }catch(error) {
      console.error(error)
    }
  }
}
