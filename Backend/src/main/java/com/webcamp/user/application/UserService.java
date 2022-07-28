package com.webcamp.user.application;

import com.webcamp.exception.UserNotFoundException;
import com.webcamp.user.application.dto.UserDto;
import com.webcamp.user.domain.User;
import com.webcamp.user.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public UserDto userLogin(UserDto userDto){
        Optional<User> findUser = userRepository.findByEmail(userDto.getEmail());
        if(findUser.isPresent()){
            return findUser.get().toDto();
        }
        User saveUser = userRepository.save(new User(userDto.getName(), userDto.getEmail()));
        return saveUser.toDto();
    }

    @Transactional
    public UserDto updateUser(Long id, UserDto userDto) {
        User updateUser = userRepository.findById(id).orElseThrow(UserNotFoundException::new);
        updateUser.update(userDto);

        return updateUser.toDto();
    }

    @Transactional
    public UserDto findById(Long id) {
        Optional<User> findUser =  userRepository.findById(id);
        return findUser.get().toDto();
    }

    @Transactional
    public void  deleteUser(Long id)  {
        userRepository.deleteById(id);
    }
}
