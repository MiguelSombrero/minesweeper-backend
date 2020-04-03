package minesweeper.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import minesweeper.backend.domain.Result;

public interface ResultRepository extends JpaRepository<Result, Long> {
}

