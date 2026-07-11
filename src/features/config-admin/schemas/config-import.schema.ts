import { z } from "zod";

export const configImportTextSchema = z.string().min(2).max(50000);
