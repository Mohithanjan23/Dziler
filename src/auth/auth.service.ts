import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }

    async validateApiKey(key: string): Promise<boolean> {
        const apiKey = await this.prisma.apiKey.findUnique({
            where: { key, isActive: true },
        });

        if (apiKey) {
            // Async update usage count without blocking
            await this.prisma.apiKey.update({
                where: { id: apiKey.id },
                data: {
                    requests: { increment: 1 },
                    lastUsed: new Date(),
                },
            });
            return true;
        }

        return false;
    }
}
