package minesweeper.backend.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import minesweeper.backend.domain.Result;

public interface ResultRepository extends JpaRepository<Result, Long> {
	Result findFirstByDifficultyOrderByTimeDesc(String difficulty);
	List<Result> findAll(Sort sort);
}

