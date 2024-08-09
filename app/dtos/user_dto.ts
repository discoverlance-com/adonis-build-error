import User from '#models/user'

export class UserDto {
  constructor(private user: User) {}

  toJson() {
    return {
      id: this.user.id,
      fullName: this.user.fullName,
      email: this.user.email,
      createdAt: this.user.role.createdAt,
      updatedAt: this.user.role.updatedAt,
      roleId: this.user.roleId,
      avatar: this.user.avatar,
      role: {
        id: this.user.role.id,
        name: this.user.role.name,
        description: this.user.role.description,
        createdAt: this.user.role.createdAt,
        updatedAt: this.user.role.updatedAt,
      },
    }
  }
}
