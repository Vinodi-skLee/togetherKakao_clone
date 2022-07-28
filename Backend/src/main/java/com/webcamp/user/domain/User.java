package com.webcamp.user.domain;

import com.webcamp.common.BaseEntity;
import com.webcamp.user.application.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public void update(UserDto userDto){
        setUserDatas(userDto);
    }

    public void  setUserDatas(UserDto userDto) {
        this.name = userDto.getName();
        this.email = userDto.getEmail();
    }

    public UserDto toDto(){
        return new UserDto(name, email);
    }
}
