package minesweeper.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import minesweeper.backend.domain.Minesweeper;

public interface MinesweeperRepository extends JpaRepository<Minesweeper, Long> {

}
