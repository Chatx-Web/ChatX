import { Request, Response, NextFunction } from "express"

export const TryCatch = (content: (req: Request,res:Response) => Promise<any>) => 
    async (req: Request,res:Response,next: NextFunction) => {
    try{
        await content(req,res);
    }catch(error){
        next(error)
    }
}