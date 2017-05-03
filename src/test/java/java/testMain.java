import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Created by ckyoung on 03-May-17.
 */
public class testMain {
    @Before
    public void SetUp(){
        System.out.println("Hello World!");
    }

    @Test
    public void firstTest(){
        Assert.assertEquals("Hello World!", "Hello World!");
    }
}
