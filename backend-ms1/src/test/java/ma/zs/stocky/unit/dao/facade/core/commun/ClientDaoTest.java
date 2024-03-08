package ma.zs.stocky.dao.facade.core.commun;

import ma.zs.stocky.bean.core.commun.Client;
import ma.zs.stocky.dao.facade.core.commun.ClientDao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;
import java.util.List;

import java.util.stream.Collectors;
import java.util.stream.LongStream;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class ClientDaoTest {

@Autowired
    private ClientDao underTest;

    @Test
    void shouldFindByCin(){
        String cin = "cin-1";
        Client entity = new Client();
        entity.setCin(cin);
        underTest.save(entity);
        Client loaded = underTest.findByCin(cin);
        assertThat(entity.getCin()).isEqualTo(cin);
    }

    @Test
    void shouldDeleteByCin() {
        String cin = "cin-1";
        Client entity = new Client();
        entity.setCin(cin);
        underTest.save(entity);

        int result = underTest.deleteByCin(cin);

        Client loaded = underTest.findByCin(cin);
        assertThat(entity.getCin()).isNull(loaded);
        assertThat(result).isEqualTo(1);
    }

    @Test
    void shouldFindById(){
        Long id = 1L;
        Client entity = new Client();
        entity.setId(id);
        underTest.save(entity);
        Client loaded = underTest.findById(id).get();
        assertThat(entity.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        Client entity = new Client();
        entity.setId(id);
        underTest.save(entity);

        int result = underTest.deleteById(id);

        Client loaded = underTest.findById(id);
        assertThat(entity.getId()).isNull();
        assertThat(result).isEqualTo(1);
    }


    @Test
    void shouldFindAll() {
        // Given
        List<Client> items = LongStream.rangeClosed(1, 10).mapToObj(Client::new).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<Client> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }
    @Test
    void shouldSave(){
        Client given = new Client();
        given.setCin("cin-1");
        given.setNom("nom-1");
        given.setTel("tel-1");
        given.setEmail("email-1");
        given.setAdresse("adresse-1");
        given.setDescription("description-1");
        given.setCreance(BigDecimal.TEN);

        Client saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

}
