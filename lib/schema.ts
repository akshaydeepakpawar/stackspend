import { z } from "zod";

export const auditSchema = z.object({
  tool: z.string(),
  plan: z.string(),
  monthlySpend: z.coerce.number().min(0),
  seats: z.coerce.number().min(1),
  teamSize: z.coerce.number().min(1),
  useCase: z.string(),
});

export type AuditSchemaType = z.infer<typeof auditSchema>;