import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'John',
    description: 'Le prénom de l\'utilisateur',
  })
  nom: string;

  @ApiProperty({
    example: 'Doe',
    description: 'Le nom de l\'utilisateur',
  })
  prenom: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'L\'email de l\'utilisateur',
  })
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'Le mot de passe de l\'utilisateur',
  })
  mdp: string;

  @ApiProperty({
    example: 'client',
    enum: ['super_admin', 'admin', 'technicien', 'client'],
    description: 'Le rôle de l\'utilisateur',
  })
  role: string;

  @ApiProperty({
    example: '+33612345678',
    description: 'Le numéro de téléphone de l\'utilisateur',
  })
  telephone: string;

  @ApiProperty({
    example: '123 rue de Paris, 75001 Paris',
    description: 'L\'adresse de l\'utilisateur',
  })
  adresse: string;
}